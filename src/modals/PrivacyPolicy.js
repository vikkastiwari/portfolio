import React from "react";

const Disclaimer = () => {
  return (
    <div
      id="privacy-policy"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content bg-dark-2 text-light">
          <div className="modal-header border-secondary">
            <h5 className="modal-title text-white">Privacy Policy</h5>
            <button
              type="button"
              className="close font-weight-400 text-white"
              data-dismiss="modal"
              aria-label="Close"
            >
              {" "}
              <span aria-hidden="true">&times;</span>{" "}
            </button>
          </div>
          <div className="modal-body p-4">
            <p className="text-white-50 mb-1 mt-1">
              Last updated on January 1, 2021.
            </p>
            <h5 className="text-white text-4 mt-4">1. What Data We Get</h5>
            <p>
              We collect certain data from you directly, like information you
              enter yourself in the contact form.
            </p>
            <h5 className="text-white text-4 mt-4">
              2. What We Use Your Data For
            </h5>
            <p>
              Responding to your questions, concerns, suggestions and messages.
            </p>
            <h5 className="text-white text-4 mt-4">
              3. Your Choices About the Use of Your Data
            </h5>
            <p>
              To stop receiving important updates from us, you can opt out by
              using the unsubscribe mechanism in the email you receive.
            </p>
            <h5 className="text-white text-4 mt-4">
              4. What Do We Do With Your Information?
            </h5>
            <p>
              With your permission, we may send you emails about updates. We
              never sell your information to any third party.
            </p>
            <p>
              Updates like:
              <ol className="line-height-5">
                <li>New technical blogs</li>
                <li>Reminders about new upcoming or recent videos</li>
                <li>Tips and Tricks from my journey</li>
                <li>Glimpse of new trending technologies</li>
              </ol>
            </p>
            <h5 className="text-white text-4 mt-4">5. Security</h5>
            <p>
              To protect your personal information, we take reasonable
              precautions and follow industry best practices to make sure it is
              not inappropriately lost, misused, accessed, disclosed, altered or
              destroyed. We do not give permission to anyone to do web scraping
              or public penetration testing.
            </p>
            <h5 className="text-white text-4 mt-4">6. Cookies</h5>
            <p>
              We use cookies to maintain session of your user. It is not used to
              personally identify you on other websites.
            </p>
            <h5 className="text-white text-4 mt-4">
              7. Changes To Privacy Policy
            </h5>
            <p>
              We reserve the right, at Our sole discretion, to modify or replace
              this privacy policy at any time. If a revision is material We will
              make reasonable efforts to provide at least 15 days' notice prior
              to any new policy taking effect. What constitutes a material
              change will be determined at Our sole discretion.
            </p>
            <p>
              By continuing to access or use Our Service after those revisions
              become effective, You agree to be bound by the revised privacy
              policy. If You do not agree to the new privacy policy, in whole or
              in part, please stop using the website and the Service.
            </p>
            <h5 className="text-white text-4 mt-4">8. Questions</h5>
            <p>
              If you would like to access, correct, amend or delete any personal
              information we have about you. Email us at support@vikastiwari.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
