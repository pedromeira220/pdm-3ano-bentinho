import { useContext } from "react";
import { Text } from "react-native";
import { AuthContext } from "../contexts/auth-context";

export default function Home() {

  const {user} = useContext(AuthContext)

  return (
    <>
      <Text>Tela de Home</Text>
      <Text>Bem vindo {user?.email}</Text>
    </>
  )
}