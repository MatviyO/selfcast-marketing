import styles from './page.module.css'
import Link from 'next/link'

export const metadata = {
    title: 'Terms of Use – Selfcast',
    description: 'Terms of use and legal information for Selfcast services',
}

export default function TermsOfUsePage() {
    return (
        <div className={styles.wrapper}>
            <header className={styles.hero}>
                <div className={styles.heroInner}>
                    <div className={styles.heroContent}>
                        <h1>
                            <span>TERMS OF USE</span>
                        </h1>
                    </div>
                </div>
            </header>

            <div className={`${styles.content} container`}>
                <section className={styles.section}>
                    <h2>1. Introduction</h2>
                    <p>
                        1.1 These terms of use (together with the documents referred to in them) (the "Terms of Use") are the terms on which you may make use of our website www.selfcast.com, our mobile application ("App") (collectively named "The Site", "The Website" or "Selfcast") and the related services (the "Services"). Our Services are provided to you by Selfcast ApS, Company no. 39603535 (referred to as "the Company", "Selfcast" or "We"), Store Kongensgade 25, 1264 Copenhagen K, Denmark.
                    </p>
                    <p>
                        1.2 Please read these Terms of Use carefully before you start to use our Services. You may want to print a copy of these Terms of Use for future reference but remember to check back occasionally just in case we have updated them as we reserve the right to update these Terms of Use in accordance with paragraph 11.5.
                    </p>
                    <p>
                        1.3 By using our Services, you confirm that you agree to be bound by these Terms of Use (as may be amended from time to time). If you do not agree to these Terms of Use, please do not use our Services.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>2. Other Documents</h2>
                    <p>
                        2.1 These Terms of Use refer to the following additional terms, which also apply to your use of our Services:
                    </p>
                    <p>
                        Our privacy policy, which sets out the terms on which we process any personal data we collect from you, or that you provide to us. By using our site, you consent to such processing and you confirm that all data provided by you is accurate.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>3. Site and Services</h2>
                    <h3>3.1 What our Site does</h3>
                    <p>
                        The purpose of our Services (the "Purpose") is to provide a networking platform to connect Talents (actors, models, extras and the like) with Employers (Agents, Advertising Agencies, TV-stations, film companies and the like) who are searching for Talents to participate in ads, commercials, TV shows, feature films and the like.
                    </p>
                    <p>
                        Our Site offers many features, hereunder but not limited to, a comprehensive Talent Profile section that you must maintain yourself, including a feature to cast yourself with a mobile device (known as selfcast). You can search for jobs or have jobs offered and you can communicate with the Employers about job details, terms, salary and the like and finally the parties can sign a legally binding digital contract in case you accept the terms.
                    </p>

                    <h3>3.2 Our Services</h3>
                    <p>
                        Our Services include use of our site (including accessing, browsing, or registering to use our site) and all email notifications, applications, widgets, information, text, graphics, and material uploaded to our site by us from time to time (the "Selfcast Content"). We may update our site from time to time including to require our users to pay a fee for the use of our Services (a "Subscription"), and may change, suspend or discontinue the Services provided at any time without notice.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>4. Accessing Our Site, Registration and Payment</h2>
                    <h3>4.1 Accessing our site and registration</h3>
                    <p>
                        We want to make sure that each user will do what they agree to do in these terms. So:
                    </p>
                    <ul>
                        <li>Our site is intended for 13 years of age or older.</li>
                        <li>You must provide the following information to the Company to register your account: a valid email address, your real name or organization details, and your location (to enable us to match our users according to their location). You agree to keep this information up-to-date and accurate at all times.</li>
                        <li>Our site is only intended for use by Talents and Employers with the purpose of hiring Talents for vacant jobs in commercials, TV, movies and the like.</li>
                        <li>If you are a Talent you may want to maintain your Profile with personal information of interest for Employers.</li>
                    </ul>

                    <h3>4.2 Payment</h3>
                    <p>
                        Selfcast provides the Services mentioned above of which some will only be activated if you are a paying subscriber. Selfcast uses Apple and Google to process all transactions and you have entered into an agreement with Apple and Google about your subscriptions and payments.
                    </p>
                    <p>
                        Refunds are only offered when errors in our Service is documented by you, i.e. by a screen dump, and if you contact us within seven days after you experienced the error.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>5. Your Account</h2>
                    <p>
                        You are responsible for all activity on your account using your username and password. If you suspect that anyone else knows your username or password, or has used your username or password to access our site, you must promptly notify us at{' '}
                        <a href="mailto:support@selfcast.com" className={styles.link}>support@selfcast.com</a>
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>6. Use of Our Site</h2>
                    <h3>6.1 Your Use of Our Site</h3>
                    <p>
                        We respect yours and other users' rights and in turn, we expect you to do the same. In using our Services, you may:
                    </p>
                    <ul>
                        <li>Carry out actions and activities pursuant to your use of our Services for the Purpose of building and maintaining a user profile, search and receive job offers, communicate and interact with other users, sign digital contracts between Talents and Employers and benefit from other features offered by us.</li>
                    </ul>
                    <p>You will not use our site:</p>
                    <ul>
                        <li>For commercial purposes, unless we have expressly permitted such use in writing</li>
                        <li>To upload or send publically, or privately transmit, User Content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable</li>
                        <li>To harm or exploit minors in any way</li>
                        <li>To impersonate any person or entity, including a Selfcast director, administrator or employee</li>
                        <li>To falsely state or otherwise misrepresent your affiliation with a person or entity</li>
                        <li>To forge headers or otherwise manipulate identifiers in order to disguise the origin of any User Content</li>
                        <li>To transmit any User Content that you do not have a right to transmit under any law or contractual relationships</li>
                        <li>To upload or privately share any User Content that infringes any intellectual property rights</li>
                        <li>To upload, post, email or otherwise transmit any unsolicited or unauthorized advertising</li>
                        <li>To upload, post, email or otherwise transmit any material that contains malicious software</li>
                        <li>To interfere with or disrupt the Services or connected networks</li>
                        <li>To violate any applicable law</li>
                        <li>To "stalk" another</li>
                        <li>To extract, collect, process, combine or store personal data about other users</li>
                    </ul>

                    <h3>6.2 Your Activities and User Content</h3>
                    <ul>
                        <li>You agree that your use of our Services and Activities will only be for the Purpose.</li>
                        <li>You agree that your Activities will comply with these Terms of Use, and you will be liable to us and indemnify us for any breach.</li>
                        <li>We have the right to use, copy, distribute and disclose to third parties any User Content for promoting our site.</li>
                        <li>We have the right to disclose your identity to any third party claiming intellectual property rights violation.</li>
                        <li>We may access, preserve and/or disclose your account information if required by law or for Terms of Use enforcement.</li>
                    </ul>

                    <h3>6.3 Content</h3>
                    <ul>
                        <li>We make no representations about the accuracy of Company Content or User Content.</li>
                        <li>Links to third-party sites are provided for information only.</li>
                        <li>We do not guarantee our Services will be error-free.</li>
                    </ul>

                    <h3>6.4 Restriction on Competitive Use</h3>
                    <p>
                        Producers and talents may not use the Selfcast platform, its services, or social media to build or promote a competing platform, service, or agency.
                    </p>

                    <h3>6.5 Prohibition of AI-Generated Content</h3>
                    <p>
                        Talents are prohibited from uploading AI-generated content, including deepfake images, voice clones, or other synthetic media, unless clearly labeled and compliant with Selfcast guidelines.
                    </p>

                    <h3>6.6 Non-Circumvention</h3>
                    <p>
                        Employers agree not to circumvent the Selfcast platform by engaging or attempting to engage with talents outside the platform for opportunities found through Selfcast.
                    </p>

                    <h3>6.7 Responsibility for Taxes and Legal Compliance</h3>
                    <p>
                        All users are individually responsible for their own tax reporting and legal obligations associated with earnings and activities conducted through the Selfcast platform.
                    </p>

                    <h3>6.8 Code of Conduct</h3>
                    <p>
                        Selfcast expects all users to act with professionalism, honesty, and respect. Discrimination, harassment, or abusive behavior of any kind is not tolerated.
                    </p>

                    <h3>6.9 Child Users and Parental Responsibility</h3>
                    <p>
                        Users under the age of 18 must have the consent of a parent or legal guardian to use Selfcast. Parents or guardians must ensure:
                    </p>
                    <ul>
                        <li>The profile is accurate, up to date, and only contains appropriate content</li>
                        <li>All communication and job applications are reviewed and approved</li>
                        <li>The child's participation complies with applicable child labor laws</li>
                        <li>Any earnings or contracts are properly managed</li>
                    </ul>

                    <h3>6.10 Use of Profile Media for Marketing</h3>
                    <p>
                        By using Selfcast, you grant us the right to use publicly visible content from your profile for promotional purposes. You can opt out by contacting{' '}
                        <a href="mailto:support@selfcast.com" className={styles.link}>support@selfcast.com</a>
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>7. Selfcast Rights</h2>
                    <p>
                        7.1 All rights, title and interests in and to our Services (excluding User Content), the user interface, graphics, editorial Selfcast Content, scripts and software are and will remain the exclusive property of Selfcast and its licensors.
                    </p>
                    <p>
                        7.2 Selfcast grants you a non-exclusive license to use and/or reproduce the Brand Assets for activities which fall within the Purpose, such use and activities to at all times adhere to these Terms of Use.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>8. Indemnity</h2>
                    <p>
                        You agree to indemnify and hold Selfcast harmless from any claims arising out of your User Content, Activities, connection to the Services, violation of these Terms of Use, or violation of any rights of another.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>9. Limitation of Liability</h2>
                    <p>
                        9.1 To the extent permitted by law, we exclude all conditions, warranties, representations or other terms that may apply to our site or any Content on it, whether express or implied.
                    </p>
                    <p>
                        9.2 Selfcast will provide the Services with reasonable care and skill but will not be liable for any loss or damage arising from:
                    </p>
                    <ul>
                        <li>Use of, or inability to use, our site</li>
                        <li>Use of or reliance on any Content displayed on our site</li>
                        <li>Improper use of our Services</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>10. Termination</h2>
                    <p>
                        10.1 We reserve the right to change, suspend or discontinue the Services at any time without notice.
                    </p>
                    <p>
                        10.2 Your account may be terminated by Selfcast upon fourteen (14) days' notice for any reason; or immediately if you breach these Terms of Use.
                    </p>
                    <p>
                        10.3 You may disable or delete your account at any time. See our Privacy Policy for details about data retention.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>11. General Terms</h2>
                    <p>
                        11.1 These Terms of Use constitute the entire agreement between you and Selfcast.
                    </p>
                    <p>
                        11.2 These Terms of Use shall be governed by the laws of Denmark. Any disputes must be resolved by the courts of Copenhagen.
                    </p>
                    <p>
                        11.3 If we don't enforce any particular provision, we are not waiving our right to do so later.
                    </p>
                    <p>
                        11.4 Your notices to us must be sent by email to:{' '}
                        <a href="mailto:support@selfcast.com" className={styles.link}>support@selfcast.com</a>
                    </p>
                    <p>
                        11.5 We may update these Terms of Use at any time, with updates taking effect when you next access the Service or thirty (30) days after posting.
                    </p>
                </section>

                <div className={styles.footer}>
                    <p>
                        © 2019-2025 Selfcast ApS, All Rights Reserved •{' '}
                        <Link href="/privacy-policy" className={styles.link}>
                            Privacy Policy
                        </Link>{' '}
                        •{' '}
                        <Link href="/support" className={styles.link}>
                            Support
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
