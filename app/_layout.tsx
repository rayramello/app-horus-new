import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      {/* Deixa a barra de status branca (para fundo escuro) */}
      <StatusBar style="light" />

      <Stack screenOptions={{ headerShown: false }}>
        {/* 1. OBRIGATÓRIO: A rota inicial (O Porteiro) */}
        <Stack.Screen name="index" />

        {/* 2. A tela de Login */}
        <Stack.Screen name="login" />

        {/* 3. As Abas (Home, Buscar, Criar) */}
        <Stack.Screen name="(tabs)" />

        {/* OBS: Se você moveu o 'create-post.tsx' para dentro da pasta '(tabs)', 
           você NÃO precisa declarar ele aqui. As abas já cuidam dele.
           Se ele estiver solto na raiz 'app/', mantenha a linha abaixo:
        */}
        {/* <Stack.Screen name="create-post" options={{ presentation: 'modal' }} /> */}
      </Stack>
    </>
  );
}