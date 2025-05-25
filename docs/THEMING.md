# 🎨 Como Adicionar uma Nova Cor ao Tema

Este guia explica como adicionar uma nova cor personalizada ao sistema de theming do app usando **Tailwind CSS** e **NativeWind**.

---

## ✅ Passo 1: Adicione a variável no `global.css`

Edite o arquivo `global.css` para incluir a nova cor, tanto para o tema claro quanto escuro:

```css
:root {
  --accent: #ff4081;
}

@media (prefers-color-scheme: dark) {
  :root {
    --accent: #f06292;
  }
}
```

---

## ✅ Passo 2: Mapeie a cor no `tailwind.config.js`

Adicione a nova cor ao bloco `extend.colors`:

```js
extend: {
  colors: {
    accent: 'var(--accent)',
  }
}
```

---

## ✅ Passo 3: Use a nova cor no app

Aplique a nova cor utilizando as classes utilitárias do Tailwind/NativeWind:

```tsx
<View className="bg-accent">
  <Text className="text-white">Botão com cor personalizada!</Text>
</View>
```

---

## 📌 Observações

- Sempre defina a variável **em ambos os temas**: claro (`:root`) e escuro (`@media (prefers-color-scheme: dark)`).
- Evite usar códigos de cor fixos no JSX. Sempre use variáveis do tema para manter a consistência.
- Após a alteração, reinicie o servidor de desenvolvimento para aplicar as mudanças.

---

