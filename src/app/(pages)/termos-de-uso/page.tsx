import type { Metadata } from "next";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData";
import { SITE_URL } from "@/constants/seo";

export const metadata: Metadata = {
  title: "Termos de Uso | Portocon Contabilidade e Assessoria LTDA",
  description:
    "Termos de uso do site Portocon Contabilidade e Assessoria LTDA. Conheça as condições de uso dos materiais e serviços oferecidos.",
  openGraph: {
    title: "Termos de Uso | Portocon Contabilidade e Assessoria LTDA",
    description:
      "Termos de uso do site Portocon Contabilidade e Assessoria LTDA. Conheça as condições de uso dos materiais e serviços oferecidos.",
    url: `${SITE_URL}/termos-de-uso`,
  },
  alternates: {
    canonical: `${SITE_URL}/termos-de-uso`,
  },
};

export default function TermosDeUsoPage() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Termos de Uso", url: `${SITE_URL}/termos-de-uso` },
        ]}
      />
      <Header />
      <main>
        <article className="container-padding mx-auto max-w-4xl wrap-break-word py-12">
          <div className="space-y-6 text-gray-700 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-2">
            <h2>1. Termos</h2>
            <p>
              Ao acessar o site Portocon Contabilidade e Assessoria LTDA, concorda em cumprir
              estes termos de serviço, todas as leis e regulamentos aplicáveis e
              concorda que é responsável pelo cumprimento de todas as leis
              locais aplicáveis. Se você não concordar com algum desses termos,
              está proibido de usar ou acessar este site. Os materiais contidos
              neste site são protegidos pelas leis de direitos autorais e marcas
              comerciais aplicáveis.
            </p>

            <h2>2. Uso de Licença</h2>
            <p>
              É concedida permissão para baixar temporariamente uma cópia dos
              materiais (informações ou software) no site Portocon
              Contabilidade, apenas para visualização transitória pessoal e não
              comercial. Esta é a concessão de uma licença, não uma
              transferência de título e, sob esta licença, você não pode:
            </p>
            <ol>
              <li>modificar ou copiar os materiais;</li>
              <li>
                usar os materiais para qualquer finalidade comercial ou para
                exibição pública (comercial ou não comercial);
              </li>
              <li>
                tentar descompilar ou fazer engenharia reversa de qualquer
                software contido no site Portocon Contabilidade e Assessoria LTDA;
              </li>
              <li>
                remover quaisquer direitos autorais ou outras notações de
                propriedade dos materiais; ou
              </li>
              <li>
                transferir os materiais para outra pessoa ou &apos;espelhe&apos;
                os materiais em qualquer outro servidor.
              </li>
            </ol>
            <p>
              Esta licença será automaticamente rescindida se você violar alguma
              dessas restrições e poderá ser rescindida por Portocon
              Contabilidade a qualquer momento. Ao encerrar a visualização
              desses materiais ou após o término desta licença, você deve apagar
              todos os materiais baixados em sua posse, seja em formato
              eletrônico ou impresso.
            </p>

            <h2>3. Isenção de responsabilidade</h2>
            <ol>
              <li>
                Os materiais no site da Portocon Contabilidade e Assessoria LTDA são fornecidos
                &apos;como estão&apos;. Portocon Contabilidade e Assessoria LTDA não oferece
                garantias, expressas ou implícitas, e, por este meio, isenta e
                nega todas as outras garantias, incluindo, sem limitação,
                garantias implícitas ou condições de comercialização, adequação
                a um fim específico ou não violação de propriedade intelectual
                ou outra violação de direitos.
              </li>
              <li>
                Além disso, a Portocon Contabilidade e Assessoria LTDA não garante ou faz qualquer
                representação relativa à precisão, aos resultados prováveis ou à
                confiabilidade do uso dos materiais em seu site ou de outra
                forma relacionado a esses materiais ou em sites vinculados a
                este site.
              </li>
            </ol>

            <h2>4. Limitações</h2>
            <p>
              Em nenhum caso a Portocon Contabilidade e Assessoria LTDA ou seus fornecedores serão
              responsáveis por quaisquer danos (incluindo, sem limitação, danos
              por perda de dados ou lucro ou devido a interrupção dos negócios)
              decorrentes do uso ou da incapacidade de usar os materiais em
              Portocon Contabilidade e Assessoria LTDA, mesmo que Portocon Contabilidade e Assessoria LTDA ou um
              representante autorizado da Portocon Contabilidade e Assessoria LTDA tenha sido
              notificado oralmente ou por escrito da possibilidade de tais
              danos. Como algumas jurisdições não permitem limitações em
              garantias implícitas, ou limitações de responsabilidade por danos
              consequentes ou incidentais, essas limitações podem não se aplicar
              a você.
            </p>

            <h2>5. Precisão dos materiais</h2>
            <p>
              Os materiais exibidos no site da Portocon Contabilidade e Assessoria LTDA podem
              incluir erros técnicos, tipográficos ou fotográficos. Portocon
              Contabilidade não garante que qualquer material em seu site seja
              preciso, completo ou atual. Portocon Contabilidade e Assessoria LTDA pode fazer
              alterações nos materiais contidos em seu site a qualquer momento,
              sem aviso prévio. No entanto, Portocon Contabilidade e Assessoria LTDA não se
              compromete a atualizar os materiais.
            </p>

            <h2>6. Links</h2>
            <p>
              A Portocon Contabilidade e Assessoria LTDA não analisou todos os sites vinculados ao
              seu site e não é responsável pelo conteúdo de nenhum site
              vinculado. A inclusão de qualquer link não implica endosso por
              Portocon Contabilidade e Assessoria LTDA do site. O uso de qualquer site vinculado é
              por conta e risco do usuário.
            </p>

            <h3>Modificações</h3>
            <p>
              A Portocon Contabilidade e Assessoria LTDA pode revisar estes termos de serviço do
              site a qualquer momento, sem aviso prévio. Ao usar este site, você
              concorda em ficar vinculado à versão atual desses termos de
              serviço.
            </p>

            <h3>Lei aplicável</h3>
            <p>
              Estes termos e condições são regidos e interpretados de acordo com
              as leis aplicáveis e você se submete irrevogavelmente à jurisdição
              exclusiva dos tribunais naquele estado ou localidade.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
