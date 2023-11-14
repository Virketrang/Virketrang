export async function POST(request: NextRequest, response: NextResponse) {
    const path = request.nextUrl.searchParams.get('collection')

    if (!path) return new NextResponse(JSON.stringify({ error: 'No collection specified' }), { status: 400 })

    revalidateTag(path)

    return NextResponse.json({ success: true })
}
