import { AppFrame, SectionIntro } from "@/components/marketing/site-shell";

export default function TermsAndConditionsPage() {
  return (
    <AppFrame active="home">
      <section className="space-y-6">
        <SectionIntro
          eyebrow="Legal"
          title="Terms & Conditions"
          description="Please read these Terms and Conditions carefully before accessing or using our website."
        />
        <div className="soft-shadow rounded-[24px] bg-white p-6 sm:p-8">
          <div className="space-y-4 text-sm leading-7 text-slate-500">
            <p>
              Eazicred maintains www.eazicred.com (the “Website”) to provide you
              with information about products and services available through us.
              Please read these Terms and Conditions carefully before accessing or
              using this Website. By accessing or using the Website, you agree to
              these Terms and Conditions.
            </p>
            <p>
              Eazicred reserves the right to change, modify, add or remove
              portions of the terms at any time. Please check these terms
              periodically for changes. If you do not wish to be bound by this
              agreement, do not access the Website. If you have any questions
              about this Agreement, please contact us via email at
              contact@eazicred.com.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="soft-shadow rounded-[24px] bg-white p-6 sm:p-8">
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
            No Warranty
          </h3>
          <div className="mt-3 space-y-4 text-sm leading-7 text-slate-500">
            <p>
              We created this Website for the use of our online visitors. The
              information (including text, graphics and functionality) is
              presented “as is” and “as available” without express or implied
              warranties including, but not limited to, implied warranties of
              non-infringement, merchantability and fitness for a particular
              purpose.
            </p>
            <p>
              We expressly disclaim any liability for errors and omissions
              regarding the information and materials contained in the Website.
              Due to the nature of the Internet, we cannot guarantee the accuracy
              or completeness of the information contained in this Website or its
              suitability for any purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="soft-shadow rounded-[24px] bg-white p-6 sm:p-8">
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
            Viruses
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-500">
            Due to the marked increase in the fabrication and proliferation of
            computer viruses affecting the Internet, we want to warn you about
            infections or viral contamination on your system. It is your
            responsibility to scan any and all downloaded materials received from
            the Internet. We are not responsible or liable for any damage caused
            by such hazards.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="soft-shadow rounded-[24px] bg-white p-6 sm:p-8">
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
            Limitation of Liability
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-500">
            Your use of the Website is at your own risk. Notwithstanding any
            other provision in this terms and conditions, neither Eazicred LTD,
            its affiliates, officers, directors, employees, attorneys or agents
            shall have any liability with respect to, and you hereby waive,
            release and agree not to sue any of them upon, any claim for any
            special, indirect, incidental, consequential damages suffered or
            incurred by you in connection with, arising out of, or in any way
            related to, a breach of this terms and condition.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="soft-shadow rounded-[24px] bg-white p-6 sm:p-8">
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
            Remedies
          </h3>
          <div className="mt-3 space-y-4 text-sm leading-7 text-slate-500">
            <p>
              Each of the parties will be entitled to enforce its rights in the
              event of a breach of the terms of this privacy policy, to recover
              damages caused by any breach of the provisions herein and to
              exercise all other rights existing under law.
            </p>
            <p>
              Any claim or dispute arising in relation to this privacy policy
              shall be subject to the jurisdiction of the courts of the Federal
              Republic of Nigeria. We shall not be liable for any breach where a
              claim in respect of such breach is not brought within one month of
              the date that such breach arose.
            </p>
          </div>
        </div>
      </section>
    </AppFrame>
  );
}

