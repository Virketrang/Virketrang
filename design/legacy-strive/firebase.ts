import { FirebaseApp, initializeApp } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'

import firebaseConfig from './firebase-config'

export default class Firebase {
    static app: FirebaseApp = initializeApp(firebaseConfig)
    static auth: Auth = getAuth(this.app)
}
