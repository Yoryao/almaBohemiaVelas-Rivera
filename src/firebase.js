import { initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAIPtlWpie2ZU214SnCwbDaDShGL4HmE_E",
    authDomain: "almabohemiavelas.firebaseapp.com",
    projectId: "almabohemiavelas",
    storageBucket: "almabohemiavelas.appspot.com",
    messagingSenderId: "962590326892",
    appId: "1:962590326892:web:036d699fe6dd330e8c1849"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)