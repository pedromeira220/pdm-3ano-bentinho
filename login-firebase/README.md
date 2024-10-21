## Projeto PDM Firebase Login

### 1. *Firebase Authentication (Auth)*
Firebase Authentication é um serviço que facilita a autenticação de usuários em aplicativos, suportando diversos métodos, como:

- Email e senha.
- Redes sociais (Google, Facebook, Twitter, GitHub).
- Autenticação anônima.
- Autenticação com número de telefone.

#### Como integrar Firebase Auth:
1. *Configurar o Firebase no Projeto:*
   - No [Firebase Console](https://console.firebase.google.com/), crie um novo projeto.
   - Adicione seu app (Android, iOS ou Web) e obtenha as credenciais (como o arquivo google-services.json ou firebaseConfig para web).
   - Ative os métodos de autenticação que deseja utilizar em *Authentication* no console do Firebase.

2. *Instalar o SDK:*
   - *Web*: 
     ```html
     <script src="https://www.gstatic.com/firebasejs/9.x/firebase-auth.js"></script>
     ```
   - *Node.js*: 
     ```bash
     npm install firebase
     ```

3. *Código de Autenticação (exemplo para email/senha):*
   ```javascript
   import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
   import { initializeApp } from "firebase/app";

   // Configuração do Firebase
   const firebaseConfig = { /* suas configurações */ };
   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);

   // Registrar novo usuário
   createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       const user = userCredential.user;
       console.log("Usuário registrado:", user);
     })
     .catch((error) => {
       console.error("Erro:", error);
     });
   ```

### 2. *Cloud Firestore*
Cloud Firestore é um banco de dados NoSQL em tempo real que armazena dados na forma de documentos e coleções, permitindo consultas e sincronizações entre dispositivos.

#### Como integrar Firestore:
1. *Configurar o Firestore:*
   - No *Firebase Console, vá para a seção **Firestore Database* e crie o banco de dados.
   - Escolha entre os modos de segurança: produção ou teste.

2. *Instalar o SDK:*
   - *Web*:
     ```html
     <script src="https://www.gstatic.com/firebasejs/9.x/firebase-firestore.js"></script>
     ```
   - *Node.js*:
     ```bash
     npm install firebase
     ```

3. *Código para usar Firestore:*
   ```javascript
   import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
   import { initializeApp } from "firebase/app";

   // Configuração do Firebase
   const firebaseConfig = { /* suas configurações */ };
   const app = initializeApp(firebaseConfig);
   const db = getFirestore(app);

   // Adicionar um documento à coleção "users"
   async function addUser() {
     try {
       const docRef = await addDoc(collection(db, "users"), {
         name: "John Doe",
         email: "john@example.com"
       });
       console.log("Documento adicionado com ID:", docRef.id);
     } catch (e) {
       console.error("Erro ao adicionar documento:", e);
     }
   }

   // Ler documentos da coleção "users"
   async function getUsers() {
     const querySnapshot = await getDocs(collection(db, "users"));
     querySnapshot.forEach((doc) => {
       console.log(`${doc.id} => ${doc.data()}`);
     });
   }
   ```

### 3. *Integração entre Firebase Auth e Firestore*
Uma abordagem comum é usar o *Firebase Auth* para autenticar usuários e o *Firestore* para armazenar os dados do usuário autenticado.

#### Exemplo de Integração:
Quando um novo usuário se registra, seus dados são armazenados no Firestore:

```javascript
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = { /* suas configurações */ };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function registerUser(email, password, name) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return addDoc(collection(db, "users"), {
        uid: user.uid,
        name: name,
        email: email
      });
    })
    .then(() => {
      console.log("Usuário registrado e salvo no Firestore");
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}
```
