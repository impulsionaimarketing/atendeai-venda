import fs from "node:fs";
import path from "node:path";

// O conteúdo da página fica em conteudo.html (na raiz do projeto).
// Para mudar textos, preços ou links, edite esse arquivo no GitHub.
export default function Home() {
  const html = fs.readFileSync(path.join(process.cwd(), "conteudo.html"), "utf8");
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
