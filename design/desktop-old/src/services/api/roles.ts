export default abstract class Roles {
    public static async POST(body: unknown) {
        return await fetch('http://localhost:8080/api/v1/roles', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }
}
