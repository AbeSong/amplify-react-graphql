import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import HeroButtons from "../components/HeroButtons";
import { useState } from "react"; 

export default function Faq() {
  const [currentId, setCurrentId] = useState("")

  // TODO: Add animation or use material UI
  const handleClick = (e) => {
    const target = e.currentTarget;
    const parentId = target.parentElement.id
    
    if (currentId) {
      const parent = document.getElementById(currentId);
      const [firstChild, secondChild] = parent.childNodes;
      firstChild.classList.remove("active");
      secondChild.style.display = "none";
    }

    if(parentId === currentId){
      target.classList.remove("active")
      target.nextElementSibling.style.display = "none"
      setCurrentId("")
    }
    else{
      target.classList.add("active")
      target.nextElementSibling.style.display = "block"
      setCurrentId(parentId)
    }
  };

  // const handleClick = (e) => {
  //   document.querySelectorAll(".faqs-accordion_content").forEach(node => {
  //     node.classList.remove("active");
  //   })
  //   const target = e.currentTarget;
  //   target.nextElementSibling.classList.toggle("active")
  // }

  return (
    <div id="page" className="site">
      <AppHeader />
      <div id="content" className="site-content">
        <section className="hero hero-page">
          <div className="container">
            <div className="hero-content">
              <h1>Understand how trademarks work and how we can help</h1>
              <h3 className="hero-sub">Here are some frequently asked questions</h3>
              <HeroButtons />
            </div>
            <div className="page-content">
              <div id="post-54" className="faqs-accordion">
                <h4 className="faqs-accordion_toggle" onClick={handleClick}>What is a trademark?</h4>
                <div className="faqs-accordion_content">
                  <p>
                    A trademark is your brand that is used to distinguish your
                    goods and/or services from the goods and/or services of your
                    competitors.
                  </p>
                  <p>
                    A trademark can be almost anything, such as a letter, word,
                    name, signature, slogan, logo, label, shape, colour, sound,
                    scent, or any combination of these.
                  </p>
                </div>
              </div>
              <div id="post-53" className="faqs-accordion">
                <h4 className="faqs-accordion_toggle" onClick={handleClick}>Why register a trademark?</h4>
                <div className="faqs-accordion_content">
                  <p>
                    There are numerous benefits with registering a trademark.
                    For example:
                  </p>
                  <p>
                    1. You will be granted with exclusive rights to use, license
                    and sell the trademark in Australia.
                  </p>
                  <p>
                    2. You will be entitled to take legal action against others
                    that use the same or similar trademark in relation to
                    similar goods and/or services.
                  </p>
                  <p>
                    3. It will be possible to utilise the ® symbol next to your
                    trademark. This will put others on notice that your
                    trademark is registered and deter others from potentially
                    copying or using your trademark.
                  </p>
                  <p>
                    4. A competitor, or any other business, will be prevented
                    from registering any trademark that is identical or similar
                    to your registered trademark in relation to similar goods
                    and/or services.
                  </p>
                  <p>
                    5. By registering your trademark, you will ensure that your
                    trademark is not identical, or similar, to any other
                    registered trademarks. This will prevent you from accidently
                    infringing upon another registered trademark.
                  </p>
                  <p>
                    6. It will be possible to notify the Australian Border Force
                    (previously Australian Customs) to prevent the importation
                    of goods that infringe on your rights.
                  </p>
                  <p>
                    7. A registered trademark is an intangible asset and will
                    add value to your business.
                  </p>
                </div>
              </div>
              <div id="post-52" className="faqs-accordion">
                <h4 className="faqs-accordion_toggle" onClick={handleClick}>
                  What are trademark classes?
                </h4>
                <div className="faqs-accordion_content">
                  <p>
                    When filing a trademark application, you must specify the
                    goods and/or services on which you wish to use your
                    trademark. These goods or services are categorised into one
                    or more classes.
                  </p>
                  <p>
                    Currently, all goods and services are divided into 45
                    classes. Classes 1-34 relate to goods and classes 35-45
                    relate to services.
                  </p>
                  <p>
                    For each class in a trademark application, there will be an
                    official fee of AU$250. Accordingly, it is important to
                    carefully select the goods and/or services (and thereby the
                    corresponding classes) that you want protected by your
                    trademark.
                  </p>
                </div>
              </div>
              <div id="post-51" className="faqs-accordion">
                <h4 className="faqs-accordion_toggle" onClick={handleClick}>
                  What is a trademark search?
                </h4>
                <div className="faqs-accordion_content">
                  <p>
                    Before filing a trademark application, it is generally wise
                    to conduct a trademark search to check whether your
                    trademark is available for registration (i.e., whether there
                    are already any similar trademarks registered or applied for
                    registration).
                  </p>
                  <p>
                    This search can be conducted on{" "}
                    <a href="https://search.ipaustralia.gov.au/trademarks/search/quick">
                      IP Australia’s Trade Marks search system
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div id="post-49" className="faqs-accordion">
                <h4 className="faqs-accordion_toggle" onClick={handleClick}>
                  What is the difference between a registered trademark and
                  business name?
                </h4>
                <div className="faqs-accordion_content">
                  <p>
                    A business name is essentially a name under which you or
                    your company trades (e.g., “John Smith Pty Ltd” trading as
                    “John Smith Cleaners”). Registering a business name is a
                    legal requirement in Australia so that people can identify
                    the legal owner of the business. However, a registered
                    business name is not a form of Intellectual Property and
                    therefore does not provide you with exclusive ownership of
                    that name.
                  </p>
                  <p>
                    In contrast, a trademark is your brand that is used to
                    distinguish your goods and/or services from the goods and/or
                    services of your competitors. By registering your trademark,
                    you will be provided with exclusive rights to use, license
                    and sell the trademark in Australia.
                  </p>
                </div>
              </div>
              <div id="post-48" className="faqs-accordion">
                <h4 className="faqs-accordion_toggle" onClick={handleClick}>
                  What is the trademark application process?
                </h4>
                <div className="faqs-accordion_content">
                  <p>
                    After filing, the trademark application will undergo
                    examination to determine whether your trademark satisfies
                    the registration requirements.
                  </p>
                  <p>
                    If any issues are discovered during examination, IP
                    Australia will issue an adverse report and you will be
                    provided with an opportunity to address those issues.
                  </p>
                  <p>
                    If there are no issues, the trademark application will
                    proceed to acceptance and third parties will be provided
                    with a period to oppose the registration of your trade mark.
                    If there is no opposition filed, the trade mark will be
                    registered and an official certificate will issue.
                  </p>
                </div>
              </div>
              <div id="post-47" className="faqs-accordion">
                <h4 className="faqs-accordion_toggle" onClick={handleClick}>What is ® and TM?</h4>
                <div className="faqs-accordion_content">
                  <p>
                    The TM symbol is used for claiming ownership of an
                    unregistered trademark or to indicate that there is a
                    pending trademark application.
                  </p>
                  <p>
                    The ® symbol is used to indicate that the trademark is
                    registered and therefore protected.
                  </p>
                  <p>
                    Although there is no legal requirement to use either TM or
                    ®, these symbols are helpful to put others on notice of your
                    (potential) rights.
                  </p>
                </div>
              </div>
              <div id="post-46" className="faqs-accordion">
                <h4 className="faqs-accordion_toggle" onClick={handleClick}>
                  Is there a difference between a trade mark and trademark?
                </h4>
                <div className="faqs-accordion_content">
                  <p>
                    There is no difference between a trademark or a trade mark.
                    Trademark is simply the spelling used in the USA and adopted
                    by the World Intellectual Property Organisation (WIPO).
                    Trade mark is the preferred spelling in the UK.
                  </p>
                  <p>
                    In Australia, both trademark and trade mark are used
                    interchangeably.
                  </p>
                </div>
              </div>
              <div id="post-45" className="faqs-accordion">
                <h4 className="faqs-accordion_toggle" onClick={handleClick}>Who can own a trademark?</h4>
                <div className="faqs-accordion_content">
                  <p>
                    A trademark can be owned by an individual, a company or a
                    trustee on behalf of a trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <AppFooter />
      
    </div>
  );
}
