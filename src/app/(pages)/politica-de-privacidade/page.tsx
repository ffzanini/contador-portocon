import type { Metadata } from "next";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData";
import { SITE_URL } from "@/constants/seo";

export const metadata: Metadata = {
  title: "Política de Privacidade | Portocon Contabilidade e Assessoria LTDA",
  description:
    "Política de privacidade da Portocon Contabilidade e Assessoria LTDA. Conheça como tratamos suas informações e dados no site e em nossos serviços.",
  openGraph: {
    title: "Política de Privacidade | Portocon Contabilidade e Assessoria LTDA",
    description:
      "Política de privacidade da Portocon Contabilidade e Assessoria LTDA. Conheça como tratamos suas informações e dados no site e em nossos serviços.",
    url: `${SITE_URL}/politica-de-privacidade`,
  },
  alternates: {
    canonical: `${SITE_URL}/politica-de-privacidade`,
  },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: SITE_URL },
          {
            name: "Política de Privacidade",
            url: `${SITE_URL}/politica-de-privacidade`,
          },
        ]}
      />
      <Header />
      <main>
        <article className="container-padding mx-auto max-w-4xl wrap-break-word py-12">
          <div className="space-y-6 text-gray-700 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-2">
            <h2>Política de Privacidade</h2>
            <p>
              É política da Portocon Contabilidade e Assessoria LTDA respeitar a sua privacidade
              em relação a qualquer informação sua que possamos coletar no site
              Portocon Contabilidade e Assessoria LTDA, e outros sites que possuímos e operamos.
            </p>

            <p>
              Solicitamos informações pessoais apenas quando realmente
              precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios
              justos e legais, com o seu conhecimento e consentimento. Também
              informamos por que estamos coletando e como será usado.
            </p>

            <p>
              Apenas retemos as informações coletadas pelo tempo necessário para
              fornecer o serviço solicitado. Quando armazenamos dados,
              protegemos dentro de meios comercialmente aceitáveis para evitar
              perdas e roubos, bem como acesso, divulgação, cópia, uso ou
              modificação não autorizados.
            </p>

            <p>
              Não compartilhamos informações de identificação pessoal
              publicamente ou com terceiros, exceto quando exigido por lei.
            </p>

            <p>
              O nosso site pode ter links para sites externos que não são
              operados por nós. Esteja ciente de que não temos controle sobre o
              conteúdo e práticas desses sites e não podemos aceitar
              responsabilidade por suas respectivas políticas de privacidade.
            </p>

            <p>
              Você é livre para recusar a nossa solicitação de informações
              pessoais, entendendo que talvez não possamos fornecer alguns dos
              serviços desejados.
            </p>

            <p>
              O uso continuado de nosso site será considerado como aceitação de
              nossas práticas em torno de privacidade e informações pessoais. Se
              você tiver alguma dúvida sobre como lidamos com dados do usuário e
              informações pessoais, entre em contato conosco.
            </p>

            <h2>Política de Cookies Portocon Contabilidade e Assessoria LTDA</h2>

            <h3>O que são cookies?</h3>
            <p>
              Como é prática comum em quase todos os sites profissionais, este
              site usa cookies, que são pequenos arquivos baixados no seu
              computador, para melhorar sua experiência. Esta página descreve
              quais informações eles coletam, como as usamos e por que às vezes
              precisamos armazenar esses cookies. Também compartilharemos como
              você pode impedir que esses cookies sejam armazenados, no entanto,
              isso pode fazer o downgrade ou &apos;quebrar&apos; certos
              elementos da funcionalidade do site.
            </p>

            <h3>Como usamos os cookies</h3>
            <p>
              Utilizamos cookies por vários motivos, detalhados abaixo.
              Infelizmente, na maioria dos casos, não existem opções padrão do
              setor para desativar os cookies sem desativar completamente a
              funcionalidade e os recursos que eles adicionam a este site. É
              recomendável que você deixe todos os cookies se não tiver certeza
              se precisa ou não deles, caso sejam usados para fornecer um
              serviço que você usa.
            </p>

            <h3>Desativar cookies</h3>
            <p>
              Você pode impedir a configuração de cookies ajustando as
              configurações do seu navegador (consulte a Ajuda do navegador para
              saber como fazer isso). Esteja ciente de que a desativação de
              cookies afetará a funcionalidade deste e de muitos outros sites
              que você visita. A desativação de cookies geralmente resultará na
              desativação de determinadas funcionalidades e recursos deste site.
              Portanto, é recomendável que você não desative os cookies.
            </p>

            <h3>Cookies que definimos</h3>
            <ul>
              <li>
                <strong>Cookies relacionados à conta:</strong> Se você criar uma
                conta conosco, usaremos cookies para o gerenciamento do processo
                de inscrição e administração geral. Esses cookies geralmente
                serão excluídos quando você sair do sistema, porém, em alguns
                casos, eles poderão permanecer posteriormente para lembrar as
                preferências do seu site ao sair.
              </li>
              <li>
                <strong>Cookies relacionados ao login:</strong> Utilizamos
                cookies quando você está logado, para que possamos lembrar dessa
                ação. Isso evita que você precise fazer login sempre que visitar
                uma nova página. Esses cookies são normalmente removidos ou
                limpos quando você efetua logout.
              </li>
              <li>
                <strong>Cookies relacionados a boletins por e-mail:</strong>{" "}
                Este site pode oferecer serviços de assinatura de boletim
                informativo ou e-mail e os cookies podem ser usados para lembrar
                se você já está registrado e se deve mostrar determinadas
                notificações válidas apenas para usuários inscritos ou não
                inscritos.
              </li>
              <li>
                <strong>Cookies relacionados a formulários:</strong> Quando você
                envia dados por meio de um formulário como os encontrados nas
                páginas de contato ou nos formulários de comentários, os cookies
                podem ser configurados para lembrar os detalhes do usuário para
                correspondência futura.
              </li>
              <li>
                <strong>Cookies de preferências do site:</strong> Para
                proporcionar uma ótima experiência neste site, fornecemos a
                funcionalidade para definir suas preferências de como esse site
                é executado quando você o usa. Para lembrar suas preferências,
                precisamos definir cookies para que essas informações possam ser
                chamadas sempre que você interagir com uma página afetada por
                suas preferências.
              </li>
            </ul>

            <h3>Cookies de Terceiros</h3>
            <p>
              Em alguns casos especiais, também usamos cookies fornecidos por
              terceiros confiáveis. Este site pode usar o Google Analytics, que
              é uma das soluções de análise mais difundidas e confiáveis da Web,
              para nos ajudar a entender como você usa o site e como podemos
              melhorar sua experiência. Esses cookies podem rastrear itens como
              quanto tempo você gasta no site e as páginas visitadas.
            </p>

            <h3>Compromisso do Usuário</h3>
            <p>
              O usuário se compromete a fazer uso adequado dos conteúdos e da
              informação que a Portocon Contabilidade e Assessoria LTDA oferece no site e com
              caráter enunciativo, mas não limitativo:
            </p>
            <ul>
              <li>
                A) Não se envolver em atividades que sejam ilegais ou contrárias
                à boa fé e à ordem pública;
              </li>
              <li>
                B) Não difundir propaganda ou conteúdo de natureza racista,
                xenofóbica, casas de apostas ou azar, qualquer tipo de
                pornografia ilegal, de apologia ao terrorismo ou contra os
                direitos humanos;
              </li>
              <li>
                C) Não causar danos aos sistemas físicos (hardwares) e lógicos
                (softwares) da Portocon Contabilidade e Assessoria LTDA, de seus fornecedores ou
                terceiros, para introduzir ou disseminar vírus informáticos ou
                quaisquer outros sistemas de hardware ou software que sejam
                capazes de causar danos anteriormente mencionados.
              </li>
            </ul>

            <h3>Mais informações</h3>
            <p>
              Esperamos que esteja esclarecido e, como mencionado anteriormente,
              se houver algo que você não tem certeza se precisa ou não,
              geralmente é mais seguro deixar os cookies ativados, caso interaja
              com um dos recursos que você usa em nosso site.
            </p>

            <p className="text-sm text-gray-600">
              Esta política é efetiva a partir de 01 outubro 2022.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
