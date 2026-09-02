export type ProcessStep = { title: string; body: string };
export type FAQ = { q: string; a: string };

export type PracticeArea = {
  slug: string;
  name: string;
  navLabel: string;
  icon: string; // lucide-react icon name
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroSubhead: string;
  intro: string;
  handles: string[];
  process: ProcessStep[];
  penalties: { heading: string; body: string; points: string[] };
  faqs: FAQ[];
  related: string[]; // slugs
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "dui-defense",
    name: "DUI Defense",
    navLabel: "DUI Defense",
    icon: "Car",
    seoTitle: "DUI Lawyer San Diego | DUI Defense Attorney",
    metaDescription:
      "Charged with DUI in San Diego? EmailMyLawyer.com fights DMV hearings, breath & blood tests, and license suspensions. Free consultation — (619) 876-0992.",
    h1: "DUI Defense Attorney in San Diego, CA",
    heroSubhead:
      "A DUI arrest is not a conviction. We challenge the stop, the tests, and the evidence to protect your license and your record.",
    intro:
      "A San Diego DUI charge moves fast — you have only 10 days to request a DMV hearing before your license is automatically suspended. At EmailMyLawyer.com, we act immediately to protect your driving privileges while we dismantle the criminal case against you. California DUI cases hinge on details prosecutors hope you'll overlook: whether the traffic stop was lawful, whether field sobriety tests were administered correctly, and whether the breath or blood sample was collected and stored properly. We scrutinize the calibration logs, the officer's training records, and the chain of custody. Whether this is your first offense or you're facing a felony DUI with priors, we build a defense aimed at reduction, dismissal, or acquittal — not a quick guilty plea.",
    handles: [
      "First, second, and third DUI offenses",
      "Felony DUI and DUI causing injury",
      "DUI with a BAC of .08% or higher",
      "Underage and zero-tolerance DUI (under 21)",
      "Commercial driver (CDL) DUI",
      "Drug DUI (DUID) and prescription-medication cases",
      "DMV administrative per se hearings",
      "License suspension and restricted-license petitions",
      "Refusal to submit to a chemical test",
      "Probation violations on an existing DUI",
    ],
    process: [
      {
        title: "Protect Your License",
        body: "We request your DMV hearing within the 10-day window and immediately preserve your right to drive while the case is pending.",
      },
      {
        title: "Attack the Evidence",
        body: "We review body-cam footage, breathalyzer calibration records, and blood-draw protocols for the flaws that lead to suppression.",
      },
      {
        title: "Negotiate From Strength",
        body: "With weaknesses exposed, we push for reduced charges — a wet reckless, a dry reckless, or an outright dismissal.",
      },
      {
        title: "Trial Readiness",
        body: "If the offer isn't right, we're prepared to take your case to a San Diego jury and hold the state to its burden of proof.",
      },
    ],
    penalties: {
      heading: "California DUI Penalties at a Glance",
      body: "Penalties escalate quickly with prior offenses and aggravating factors such as a high BAC, a minor in the vehicle, or an accident. This is general information, not legal advice — your exposure depends on the specific facts of your case.",
      points: [
        "First offense: fines, license suspension, DUI school, and possible jail",
        "Second/third offenses: mandatory jail, longer suspension, IID installation",
        "Felony DUI: state prison exposure and a permanent felony record",
        "Aggravating factors (injury, high BAC, minor passenger) increase all penalties",
      ],
    },
    faqs: [
      {
        q: "How long do I have to save my driver's license after a San Diego DUI?",
        a: "Only 10 calendar days from the date of your arrest to request a DMV hearing. Miss that deadline and your license is automatically suspended. Call us right away so we can file the request for you.",
      },
      {
        q: "Can a DUI be dismissed or reduced in California?",
        a: "Yes. Depending on the evidence, we may get charges dismissed, suppressed, or reduced to a 'wet reckless' or 'dry reckless,' which carries lighter penalties and less stigma than a DUI conviction.",
      },
      {
        q: "Do I have to blow into a breathalyzer if I'm pulled over?",
        a: "Before an arrest, you can generally decline a preliminary (roadside) breath test if you're over 21 and not on DUI probation. After a lawful arrest, refusing the official chemical test triggers separate penalties. We can review whether your stop and testing were lawful.",
      },
      {
        q: "Will I go to jail for a first-offense DUI?",
        a: "Many first-offense DUIs are resolved without meaningful jail time through probation, fines, and DUI school — but that's not guaranteed. Aggravating factors change the picture, which is why an early, aggressive defense matters.",
      },
      {
        q: "What is a DMV hearing and is it the same as court?",
        a: "No. The DMV hearing is a separate administrative proceeding that decides whether your license is suspended, independent of the criminal case in court. You can win one and lose the other, so both must be defended.",
      },
      {
        q: "How much does a DUI lawyer in San Diego cost?",
        a: "It depends on whether the case is a misdemeanor or felony and whether it goes to trial. We offer a free consultation and transparent fee options so you know exactly where you stand before you commit.",
      },
    ],
    related: ["felony-defense", "drug-crimes-defense", "expungements-record-sealing"],
  },
  {
    slug: "domestic-violence-defense",
    name: "Domestic Violence Defense",
    navLabel: "Domestic Violence",
    icon: "ShieldAlert",
    seoTitle: "Domestic Violence Attorney San Diego | DV Defense Lawyer",
    metaDescription:
      "Accused of domestic violence in San Diego? EmailMyLawyer.com defends DV charges, restraining orders, and false accusations. Free, confidential consultation.",
    h1: "Domestic Violence Defense Attorney in San Diego",
    heroSubhead:
      "An accusation can upend your family, your freedom, and your future. We defend the wrongly accused and protect your rights at every stage.",
    intro:
      "Domestic violence allegations in San Diego are treated with extraordinary aggression by prosecutors — often before anyone has heard your side. A single 911 call can lead to a mandatory arrest, a protective order that removes you from your own home, and charges that threaten your job, your custody rights, and your Second Amendment rights. At EmailMyLawyer.com, we understand how often these cases arise from misunderstandings, self-defense, or a partner's exaggeration during an emotional moment. We move quickly to address restraining orders, investigate the accuser's motives and inconsistencies, and preserve evidence — text messages, photos, and witness accounts — that tells the real story. Our goal is to protect your reputation and pursue dismissal, reduction, or acquittal.",
    handles: [
      "Corporal injury to a spouse or cohabitant (PC 273.5)",
      "Domestic battery (PC 243(e)(1))",
      "Criminal threats (PC 422)",
      "False imprisonment and dissuading a witness",
      "Violation of a protective or restraining order",
      "Child endangerment allegations (PC 273a)",
      "Emergency protective orders (EPOs) and DVROs",
      "False accusations tied to divorce or custody disputes",
      "Self-defense and mutual-combat scenarios",
      "Firearm-rights restoration after a DV case",
    ],
    process: [
      {
        title: "Address the Restraining Order",
        body: "We respond immediately to emergency and permanent protective orders so you aren't wrongly separated from your home or children.",
      },
      {
        title: "Investigate the Accusation",
        body: "We gather texts, call logs, photos, and witness statements that expose inconsistencies and reveal what actually happened.",
      },
      {
        title: "Challenge the Evidence",
        body: "We test the credibility of the accuser and the reliability of the state's proof, including recanted or coerced statements.",
      },
      {
        title: "Resolve or Fight",
        body: "We seek dismissal or reduction where possible and stand ready to try the case when the prosecution overreaches.",
      },
    ],
    penalties: {
      heading: "Consequences of a DV Conviction in California",
      body: "Beyond jail and fines, a domestic violence conviction carries collateral consequences that can follow you for life. This is general information, not legal advice.",
      points: [
        "Mandatory 52-week batterer's intervention program",
        "Loss of firearm rights under state and federal law",
        "Protective orders limiting contact with family",
        "Immigration consequences, including deportation for non-citizens",
        "Impact on child custody and professional licensing",
      ],
    },
    faqs: [
      {
        q: "Can domestic violence charges be dropped if my partner doesn't want to press charges?",
        a: "Not automatically. In California, the prosecutor — not the alleged victim — decides whether to pursue charges, and they often proceed even when the accuser recants. That's why you need your own advocate immediately.",
      },
      {
        q: "What should I do if I've been falsely accused of domestic violence?",
        a: "Do not contact the accuser, and do not discuss the case with police without a lawyer. Preserve every text, email, and photo, and call us right away so we can protect the evidence and your rights.",
      },
      {
        q: "Will a domestic violence charge affect my custody case?",
        a: "It can. Family courts take DV allegations seriously, and a conviction can restrict custody or visitation. Coordinating your criminal defense with your family-law strategy is critical.",
      },
      {
        q: "What is an emergency protective order (EPO)?",
        a: "An EPO is a short-term order police can obtain to keep you away from the accuser and your shared home. We can appear at the follow-up hearing to challenge or modify a longer-term restraining order.",
      },
      {
        q: "Do I lose my gun rights over a domestic violence case?",
        a: "A DV conviction — and even certain restraining orders — can strip your firearm rights under state and federal law. We factor firearm consequences into every defense strategy.",
      },
      {
        q: "Is domestic battery a felony or misdemeanor?",
        a: "It depends on the injury and your history. Charges like PC 243(e)(1) are misdemeanors, while corporal injury under PC 273.5 can be charged as a felony. We fight to keep charges low or dismissed.",
      },
    ],
    related: ["assault-battery-defense", "weapon-charges-defense", "felony-defense"],
  },
  {
    slug: "drug-crimes-defense",
    name: "Drug Crimes Defense",
    navLabel: "Drug Crimes",
    icon: "Pill",
    seoTitle: "Drug Crimes Lawyer San Diego | Drug Defense Attorney",
    metaDescription:
      "Facing drug charges in San Diego? EmailMyLawyer.com defends possession, sales, and trafficking cases and fights for diversion. Free consultation today.",
    h1: "Drug Crimes Defense Attorney in San Diego",
    heroSubhead:
      "From simple possession to alleged trafficking, we challenge illegal searches and fight to keep you out of jail and in treatment where appropriate.",
    intro:
      "California's drug laws have evolved, but a drug charge in San Diego can still threaten your freedom, your job, and your future. Many of these cases begin with a questionable search — a traffic stop stretched too long, a warrantless entry, or an anonymous tip that never should have led to an arrest. At EmailMyLawyer.com, the first thing we examine is whether your Fourth Amendment rights were violated, because evidence found in an illegal search can be suppressed and the case can collapse. Where treatment is the smarter path, we pursue diversion programs and drug court that resolve the case without a conviction. Where the state overreaches on sales or trafficking allegations, we hold prosecutors to their burden and fight for dismissal or acquittal.",
    handles: [
      "Simple possession of a controlled substance (HS 11350)",
      "Possession for sale (HS 11351)",
      "Sale or transportation of narcotics (HS 11352)",
      "Drug trafficking and distribution",
      "Manufacturing controlled substances",
      "Prescription-drug fraud and doctor shopping",
      "Marijuana offenses exceeding legal limits",
      "Drug paraphernalia charges",
      "PC 1000 and Prop 36 drug-diversion eligibility",
      "Federal drug charges and conspiracy allegations",
    ],
    process: [
      {
        title: "Examine the Search",
        body: "We investigate whether police had a warrant or probable cause — and move to suppress any evidence from an unlawful search.",
      },
      {
        title: "Test the State's Case",
        body: "We challenge lab analysis, quantity claims, and the leap from possession to an alleged intent to sell.",
      },
      {
        title: "Pursue Diversion",
        body: "For eligible clients, we seek drug court, PC 1000, or Prop 36 programs that resolve the case without a conviction.",
      },
      {
        title: "Defend to the End",
        body: "When the stakes demand it, we're ready to litigate suppression motions and take the case to trial.",
      },
    ],
    penalties: {
      heading: "Drug Charge Penalties in California",
      body: "Consequences range from diversion and probation to lengthy prison terms for sales and trafficking. This is general information, not legal advice.",
      points: [
        "Simple possession: often eligible for diversion or misdemeanor treatment",
        "Possession for sale: felony exposure and state prison",
        "Trafficking/transportation: enhanced sentences based on quantity",
        "Federal charges carry mandatory-minimum sentencing",
        "Collateral effects on employment, licensing, and immigration",
      ],
    },
    faqs: [
      {
        q: "Can drug charges be dismissed if the search was illegal?",
        a: "Often, yes. If police searched you, your car, or your home without a warrant or valid legal justification, we can move to suppress the evidence — and without that evidence, the prosecution frequently has no case.",
      },
      {
        q: "Am I eligible for a drug-diversion program instead of jail?",
        a: "Many first-time and non-violent possession cases qualify for diversion under PC 1000 or Prop 36. Completing the program can lead to a dismissal. We'll assess your eligibility at your consultation.",
      },
      {
        q: "What's the difference between possession and possession for sale?",
        a: "Simple possession is for personal use; possession for sale is a far more serious felony based on quantity, packaging, cash, or texts. We fight to keep charges at the lowest level the facts support.",
      },
      {
        q: "Is marijuana still illegal in California?",
        a: "Recreational use is legal within limits, but possessing large amounts, selling without a license, or providing to minors remains a crime. We defend cases that cross those lines.",
      },
      {
        q: "Can a drug conviction affect my immigration status?",
        a: "Yes — drug convictions are among the most serious for non-citizens and can trigger deportation or inadmissibility. We build defenses with immigration consequences in mind.",
      },
      {
        q: "Do you handle federal drug cases?",
        a: "Yes. Federal drug charges carry mandatory minimums and a different set of rules. We're prepared to defend cases in both state and federal court.",
      },
    ],
    related: ["dui-defense", "felony-defense", "weapon-charges-defense"],
  },
  {
    slug: "theft-crimes-defense",
    name: "Theft Crimes Defense",
    navLabel: "Theft Crimes",
    icon: "ShoppingBag",
    seoTitle: "Theft Crimes Attorney San Diego | Theft Defense Lawyer",
    metaDescription:
      "Charged with theft in San Diego? EmailMyLawyer.com defends shoplifting, petty theft, grand theft, burglary, and fraud. Protect your record — call today.",
    h1: "Theft Crimes Defense Attorney in San Diego",
    heroSubhead:
      "A theft conviction brands you as dishonest. We protect your record, your reputation, and your ability to earn a living.",
    intro:
      "A theft charge — even a first-time shoplifting allegation — can leave a permanent stain that follows you onto every job and rental application. San Diego prosecutors pursue theft cases aggressively, and a conviction for a 'crime of moral turpitude' can be especially damaging to your career, professional licenses, and immigration status. At EmailMyLawyer.com, we know these cases often rest on shaky ground: mistaken identity, blurry surveillance footage, a genuine misunderstanding at the register, or a false accusation. We investigate whether the state can actually prove intent — the cornerstone of every theft charge — and we work toward diversion, civil compromise, reduction, or dismissal so a single mistake or misunderstanding doesn't define your future.",
    handles: [
      "Petty theft and shoplifting (PC 484 / 490.5)",
      "Grand theft (PC 487)",
      "Burglary and commercial burglary (PC 459)",
      "Robbery (PC 211)",
      "Receiving stolen property (PC 496)",
      "Auto theft and joyriding (PC 487(d)(1) / VC 10851)",
      "Embezzlement (PC 503)",
      "Identity theft and credit-card fraud",
      "Organized retail theft allegations",
      "Petty theft with a prior",
    ],
    process: [
      {
        title: "Review the Allegation",
        body: "We examine surveillance video, receipts, and witness accounts to test whether the state can prove you took anything at all.",
      },
      {
        title: "Challenge Intent",
        body: "Every theft charge requires intent. We show where the evidence of intent breaks down — mistake, confusion, or misidentification.",
      },
      {
        title: "Seek an Off-Ramp",
        body: "We pursue diversion, civil compromise, or a reduction to keep a conviction off your permanent record.",
      },
      {
        title: "Trial When Needed",
        body: "If the offer doesn't protect your future, we're prepared to present your defense to a jury.",
      },
    ],
    penalties: {
      heading: "Theft Penalties in California",
      body: "Penalties depend on the value taken and your record, ranging from infractions to felony 'wobblers.' This is general information, not legal advice.",
      points: [
        "Petty theft (under $950): misdemeanor, fines, and possible jail",
        "Grand theft (over $950): felony or misdemeanor 'wobbler'",
        "Burglary and robbery: serious felony exposure, including strikes",
        "Convictions of moral turpitude affect jobs, licenses, and immigration",
        "Prior theft convictions dramatically increase exposure",
      ],
    },
    faqs: [
      {
        q: "Is shoplifting a misdemeanor or felony in California?",
        a: "Shoplifting property worth $950 or less is generally a misdemeanor under PC 459.5. Higher values or certain priors can elevate the charge. We work to keep it low or dismissed.",
      },
      {
        q: "Can a first-time theft charge be dismissed?",
        a: "Often, yes. First-time offenders may qualify for diversion or civil compromise, where completing conditions or reimbursing the store leads to a dismissal and no conviction.",
      },
      {
        q: "What is the difference between petty theft and grand theft?",
        a: "The line is the $950 value threshold. Petty theft is under $950; grand theft is over. Grand theft is a 'wobbler' that can be charged as a misdemeanor or felony.",
      },
      {
        q: "Will a theft conviction show up on background checks?",
        a: "Yes, and because theft is a 'crime of moral turpitude,' it can be especially harmful to employment and licensing. That's why we fight to avoid a conviction — and can later pursue expungement.",
      },
      {
        q: "The store already banned me and sent a demand letter. Do I still need a lawyer?",
        a: "Yes. A civil demand from a retailer is separate from the criminal case. Paying it does not resolve the charges, and you should not respond without legal advice.",
      },
      {
        q: "Can theft charges affect my immigration status?",
        a: "They can. Theft offenses involving moral turpitude may carry immigration consequences. We defend these cases with those risks in mind.",
      },
    ],
    related: ["white-collar-crimes-defense", "expungements-record-sealing", "felony-defense"],
  },
  {
    slug: "assault-battery-defense",
    name: "Assault & Battery Defense",
    navLabel: "Assault & Battery",
    icon: "Swords",
    seoTitle: "Assault & Battery Lawyer San Diego | Violent Crime Defense",
    metaDescription:
      "Charged with assault or battery in San Diego? EmailMyLawyer.com defends bar fights, self-defense cases, and aggravated assault. Free consultation — call now.",
    h1: "Assault & Battery Defense Attorney in San Diego",
    heroSubhead:
      "Self-defense is not a crime. We tell your side of the story and challenge the state's version of what happened.",
    intro:
      "Assault and battery charges in San Diego often arise from chaotic, fast-moving situations — a bar altercation, a heated argument, or a moment where you had every right to defend yourself. Yet police frequently arrest first and sort out the details later, leaving you to answer for something you may not have started. At EmailMyLawyer.com, we dig into what actually happened: who was the aggressor, whether you acted in lawful self-defense or defense of another, and whether the injuries and threats were exaggerated. We locate witnesses, secure surveillance footage, and expose inconsistencies in the accuser's account. Whether you're facing a simple battery or a serious aggravated-assault charge carrying strike consequences, we fight to protect your freedom and your record.",
    handles: [
      "Simple assault (PC 240) and battery (PC 242)",
      "Assault with a deadly weapon (PC 245(a)(1))",
      "Aggravated battery causing serious injury (PC 243(d))",
      "Battery on a peace officer",
      "Assault with force likely to cause great bodily injury",
      "Domestic-related assault and battery",
      "Criminal threats (PC 422)",
      "Mutual-combat and bar-fight cases",
      "Self-defense and defense-of-others claims",
      "Great-bodily-injury (GBI) enhancements",
    ],
    process: [
      {
        title: "Reconstruct the Incident",
        body: "We gather video, medical records, and witness statements to establish who really started the confrontation.",
      },
      {
        title: "Build the Defense",
        body: "We develop self-defense, defense-of-others, or lack-of-intent theories supported by the evidence.",
      },
      {
        title: "Neutralize Enhancements",
        body: "We fight deadly-weapon and great-bodily-injury allegations that can turn a misdemeanor into a strike felony.",
      },
      {
        title: "Resolve or Try",
        body: "We negotiate for dismissal or reduction and are fully prepared to take your case to trial.",
      },
    ],
    penalties: {
      heading: "Assault & Battery Penalties in California",
      body: "Penalties turn on the level of force, any injury, the use of a weapon, and the identity of the alleged victim. This is general information, not legal advice.",
      points: [
        "Simple assault/battery: misdemeanor, fines, and possible jail",
        "Assault with a deadly weapon: 'wobbler' with felony exposure",
        "Great-bodily-injury enhancement: added prison time and a strike",
        "Battery on protected victims carries elevated penalties",
        "Strike convictions trigger California's Three Strikes law",
      ],
    },
    faqs: [
      {
        q: "What's the difference between assault and battery in California?",
        a: "Assault (PC 240) is an attempt or threat of violence; battery (PC 242) is the actual unlawful touching. You can be charged with one or both depending on the facts.",
      },
      {
        q: "Is self-defense a valid defense to assault charges?",
        a: "Absolutely. If you reasonably believed you were in danger and used proportional force, self-defense — or defense of another — can result in an acquittal. We build that case with evidence, not just argument.",
      },
      {
        q: "Can assault charges be dropped if the other person started it?",
        a: "Who the aggressor was is central to the case. If the evidence shows you were defending yourself, we push for dismissal or present self-defense to a jury.",
      },
      {
        q: "What is assault with a deadly weapon (ADW)?",
        a: "ADW under PC 245(a)(1) involves an assault using a weapon or force likely to cause great bodily injury. It's a 'wobbler' that can be a strike felony, so aggressive defense is essential.",
      },
      {
        q: "Will an assault conviction count as a strike?",
        a: "Certain assault charges — especially those with a deadly weapon or great-bodily-injury findings — count as strikes under California's Three Strikes law. We fight to avoid strike consequences.",
      },
      {
        q: "The alleged victim doesn't want to press charges. Will the case go away?",
        a: "Not necessarily. The prosecutor decides whether to proceed. Even a reluctant witness doesn't guarantee dismissal, which is why you need your own defense from day one.",
      },
    ],
    related: ["domestic-violence-defense", "weapon-charges-defense", "felony-defense"],
  },
  {
    slug: "weapon-charges-defense",
    name: "Weapon Charges Defense",
    navLabel: "Weapon Charges",
    icon: "Crosshair",
    seoTitle: "Weapons Charges Attorney San Diego | Gun Crime Defense Lawyer",
    metaDescription:
      "Facing a gun or weapons charge in San Diego? EmailMyLawyer.com defends illegal possession, concealed-carry, and firearm enhancements. Free consultation.",
    h1: "Weapon Charges Defense Attorney in San Diego",
    heroSubhead:
      "California's gun laws are among the strictest in the nation. One misstep can become a felony. We protect your rights and your freedom.",
    intro:
      "California has some of the most complex and unforgiving firearm laws in the country, and a weapons charge in San Diego can escalate from a paperwork problem into a felony with life-altering consequences. Many of our clients are lawful gun owners who ran afoul of a technical rule — an out-of-state permit that isn't honored here, a magazine that exceeds California's limit, or a firearm transported the wrong way. Others face serious allegations tied to another offense. At EmailMyLawyer.com, we examine whether the search that produced the weapon was legal, whether you actually possessed or controlled it, and whether a valid exception applies. We fight illegal-search issues, constructive-possession theories, and sentence-enhancing allegations to protect your freedom and, where possible, your right to own firearms.",
    handles: [
      "Carrying a concealed weapon (PC 25400)",
      "Carrying a loaded firearm in public (PC 25850)",
      "Felon in possession of a firearm (PC 29800)",
      "Possession of an assault weapon (PC 30605)",
      "High-capacity magazine violations",
      "Brandishing a weapon (PC 417)",
      "Illegal sale or transfer of firearms",
      "Firearm-use sentence enhancements (PC 12022.5 / 12022.53)",
      "Ghost guns and unserialized firearms",
      "Restoration of firearm rights",
    ],
    process: [
      {
        title: "Challenge the Search",
        body: "We investigate how police found the weapon and move to suppress evidence obtained through an unlawful stop or search.",
      },
      {
        title: "Contest Possession",
        body: "We test the state's proof that you knowingly possessed or controlled the firearm — not merely that it was nearby.",
      },
      {
        title: "Fight Enhancements",
        body: "We attack firearm-use enhancements that can add years to a sentence, keeping exposure as low as the facts allow.",
      },
      {
        title: "Protect Your Rights",
        body: "We pursue dismissal or reduction and, where eligible, work to preserve or restore your firearm rights.",
      },
    ],
    penalties: {
      heading: "Weapons Charge Penalties in California",
      body: "Firearm offenses range from misdemeanors to serious felonies, and enhancements can add substantial prison time. This is general information, not legal advice.",
      points: [
        "Concealed/loaded-carry violations: 'wobblers' with jail or prison exposure",
        "Felon in possession: felony carrying state prison time",
        "Assault-weapon and magazine violations: felony exposure",
        "Firearm enhancements (PC 12022.53) add years, even decades",
        "Any conviction can permanently strip firearm rights",
      ],
    },
    faqs: [
      {
        q: "I have a concealed-carry permit from another state. Am I protected in California?",
        a: "Usually not. California generally does not honor out-of-state CCW permits, so carrying here can be charged as a crime even if you're licensed elsewhere. We defend these good-faith cases aggressively.",
      },
      {
        q: "Can a weapons charge be dismissed if the gun was found in an illegal search?",
        a: "Yes. If police lacked a warrant or valid justification, we can move to suppress the firearm — and without the weapon in evidence, the case often falls apart.",
      },
      {
        q: "What does 'constructive possession' of a firearm mean?",
        a: "It means the state claims you had control over a gun even if it wasn't on your person — for example, in a car or shared space. We challenge whether you actually knew about and controlled it.",
      },
      {
        q: "What is a firearm enhancement and why does it matter?",
        a: "Enhancements like PC 12022.53 add years or decades to a sentence when a gun is used in another crime. Defeating or reducing these allegations is often the single most important part of a defense.",
      },
      {
        q: "Can a felon ever legally own a firearm in California?",
        a: "Generally, a felony conviction bars firearm possession. In some cases, rights can be restored through a reduction to a misdemeanor or a pardon. We can evaluate your eligibility.",
      },
      {
        q: "Is it illegal to own a high-capacity magazine in California?",
        a: "California restricts magazines over 10 rounds, and the law has shifted with ongoing litigation. Possession can be charged, so it's important to have a defense that accounts for the current legal landscape.",
      },
    ],
    related: ["assault-battery-defense", "drug-crimes-defense", "felony-defense"],
  },
  {
    slug: "white-collar-crimes-defense",
    name: "White Collar Crimes Defense",
    navLabel: "White Collar Crimes",
    icon: "Briefcase",
    seoTitle: "White Collar Crimes Lawyer San Diego | Fraud Defense Attorney",
    metaDescription:
      "Under investigation for fraud or embezzlement in San Diego? EmailMyLawyer.com defends white collar cases in state and federal court. Free consultation.",
    h1: "White Collar Crimes Defense Attorney in San Diego",
    heroSubhead:
      "A financial-crime investigation can threaten your career, your assets, and your liberty. We defend your rights from the first knock on the door.",
    intro:
      "White collar allegations — fraud, embezzlement, forgery — often begin quietly, with a subpoena, an audit, or a call from an investigator, long before any charges are filed. That early stage is where your future is won or lost. At EmailMyLawyer.com, we step in immediately to shield you from self-incrimination, communicate with investigators on your behalf, and shape the narrative before the government locks in its theory. These cases turn on documents, intent, and complex financial records, and prosecutors don't always understand the business realities behind them. We work with forensic accountants and investigators to show the difference between a genuine crime and a business dispute, an accounting error, or a misunderstanding. Whether your case is in San Diego Superior Court or federal court, we mount a defense built for the stakes.",
    handles: [
      "Fraud (insurance, healthcare, mortgage, securities)",
      "Embezzlement (PC 503)",
      "Forgery and check fraud (PC 470 / 476)",
      "Identity theft (PC 530.5)",
      "Credit-card and access-card fraud",
      "Money laundering",
      "Grand theft by an employee or fiduciary",
      "Real estate and wire fraud",
      "Tax fraud and evasion",
      "Federal white collar investigations and grand-jury matters",
    ],
    process: [
      {
        title: "Intervene Early",
        body: "We engage during the investigation — before charges — to protect you from self-incrimination and influence the outcome.",
      },
      {
        title: "Master the Records",
        body: "We work with forensic accountants to analyze the financial evidence and expose the gaps in the government's theory.",
      },
      {
        title: "Attack Intent",
        body: "White collar crimes require criminal intent. We show where the case is really a business dispute or an honest mistake.",
      },
      {
        title: "Resolve or Defend",
        body: "We negotiate favorable resolutions where appropriate and litigate aggressively in state or federal court when needed.",
      },
    ],
    penalties: {
      heading: "White Collar Penalties in California",
      body: "Financial crimes can bring prison, steep restitution, and lasting professional fallout, and loss amounts drive the exposure. This is general information, not legal advice.",
      points: [
        "Felony exposure and state or federal prison time",
        "Substantial restitution and fines tied to the alleged loss",
        "Aggravated white-collar enhancements for large losses (PC 186.11)",
        "Loss of professional licenses and security clearances",
        "Federal cases carry sentencing-guideline exposure",
      ],
    },
    faqs: [
      {
        q: "I've been contacted by an investigator but not charged. Do I need a lawyer now?",
        a: "Yes — this is the most important time to have counsel. Anything you say can shape the case. We can communicate with investigators for you and often influence whether charges are filed at all.",
      },
      {
        q: "What's the difference between a business dispute and a white collar crime?",
        a: "The dividing line is criminal intent. Many prosecutions are really civil disputes or honest mistakes dressed up as crimes. We build the evidence that shows there was no intent to defraud.",
      },
      {
        q: "Will paying restitution make the charges go away?",
        a: "Restitution can be an important part of a resolution, but it doesn't automatically end a criminal case. We use it strategically as part of a broader negotiation.",
      },
      {
        q: "Do you handle federal white collar cases?",
        a: "Yes. Many financial crimes are prosecuted federally under a different set of rules and sentencing guidelines. We're prepared to defend cases in both state and federal court.",
      },
      {
        q: "Can a white collar conviction be expunged?",
        a: "Some convictions are eligible for expungement or reduction once probation is complete. We can evaluate your options for cleaning up your record after the case resolves.",
      },
      {
        q: "How long do white collar investigations take?",
        a: "They can span months or years. Getting counsel involved early lets us manage the process, protect your rights, and often resolve matters before they become public charges.",
      },
    ],
    related: ["theft-crimes-defense", "felony-defense", "expungements-record-sealing"],
  },
  {
    slug: "felony-defense",
    name: "Felony & Violent Crime Defense",
    navLabel: "Felonies & Violent Crimes",
    icon: "Gavel",
    seoTitle: "Felony Defense Attorney San Diego | Serious & Violent Crimes",
    metaDescription:
      "Facing a felony, murder, or manslaughter charge in San Diego? EmailMyLawyer.com defends the most serious cases, including strikes. Call 24/7 — free consultation.",
    h1: "Felony & Violent Crime Defense Attorney in San Diego",
    heroSubhead:
      "When your freedom is on the line, experience matters. We defend the most serious charges — murder, manslaughter, and strike felonies — with everything we have.",
    intro:
      "When you're facing a felony in San Diego — especially a violent crime like murder or manslaughter — the stakes could not be higher. A conviction can mean years or decades in state prison, a strike on your record, and the loss of the future you've built. These cases demand meticulous preparation, an aggressive investigation, and a lawyer who is genuinely prepared to go to trial. At EmailMyLawyer.com, we treat every serious felony as a case that may be tried to a jury. We scrutinize the arrest, the forensic evidence, and the witnesses; we consult experts in forensics, pathology, and reconstruction; and we build defenses grounded in the presumption of innocence. From bail and preliminary hearings through trial, we stand between you and the full weight of the state. This page also covers the bail reviews, preliminary hearings, and arrest and bench warrant matters that arise inside serious felony cases.",
    handles: [
      "Murder and attempted murder (PC 187 / 664)",
      "Voluntary and involuntary manslaughter (PC 192)",
      "Vehicular manslaughter",
      "Robbery and home-invasion robbery (PC 211)",
      "Kidnapping (PC 207)",
      "Serious and violent 'strike' felonies",
      "Great-bodily-injury and gang enhancements",
      "Bail reviews and O.R. release motions",
      "Preliminary hearings (PC 995 motions)",
      "Arrest warrants and bench warrants",
    ],
    process: [
      {
        title: "Address Custody & Bail",
        body: "We move immediately on bail reviews and release motions so you can fight the case from a position of strength.",
      },
      {
        title: "Investigate Independently",
        body: "We deploy our own investigators and experts — forensics, pathology, reconstruction — rather than trusting the police file.",
      },
      {
        title: "Win the Prelim",
        body: "At the preliminary hearing we test the state's evidence and file PC 995 motions to dismiss counts that don't hold up.",
      },
      {
        title: "Prepare for Trial",
        body: "We build every serious case for trial, so the prosecution knows we're ready to make them prove it beyond a reasonable doubt.",
      },
    ],
    penalties: {
      heading: "Felony & Violent Crime Penalties",
      body: "Serious felonies carry the harshest penalties in California law, including life sentences for the most severe offenses. This is general information, not legal advice.",
      points: [
        "Murder: 25-years-to-life or life without parole exposure",
        "Manslaughter: multi-year state prison terms",
        "Strike felonies: doubled sentences and Three Strikes exposure",
        "Enhancements (GBI, firearm, gang) add years or decades",
        "Loss of civil rights and a permanent violent-felony record",
      ],
    },
    faqs: [
      {
        q: "What should I do if I've been arrested for a serious felony?",
        a: "Invoke your right to remain silent and ask for a lawyer immediately. Do not explain or apologize to police. Call us 24/7 so we can protect your rights from the very first hours of the case.",
      },
      {
        q: "Can I get bail reduced on a felony charge?",
        a: "Often, yes. We file for bail reviews and O.R. (own-recognizance) release, presenting your ties to the community and the weaknesses in the state's case to argue for release or a lower bail.",
      },
      {
        q: "What is a preliminary hearing and why does it matter?",
        a: "It's a mini-trial where the prosecution must show enough evidence to proceed. It's a powerful opportunity to test witnesses, lock in testimony, and file a PC 995 motion to dismiss weak counts.",
      },
      {
        q: "What is a 'strike' and how does the Three Strikes law work?",
        a: "Certain serious or violent felonies count as strikes. A second strike doubles the sentence, and a third can mean 25-years-to-life. We fight to keep charges from qualifying as strikes.",
      },
      {
        q: "What's the difference between murder and manslaughter?",
        a: "Murder requires malice; manslaughter does not. The distinction — and defenses like self-defense, heat of passion, or accident — can mean the difference between life in prison and a far lesser sentence.",
      },
      {
        q: "There's a warrant out for my arrest. What should I do?",
        a: "Don't wait for police to find you. We can often arrange to address an arrest or bench warrant proactively, sometimes clearing it or minimizing custody. Call us before you're taken into custody.",
      },
    ],
    related: ["assault-battery-defense", "weapon-charges-defense", "domestic-violence-defense"],
  },
  {
    slug: "expungements-record-sealing",
    name: "Expungements & Record Sealing",
    navLabel: "Expungements & Record Sealing",
    icon: "FileCheck",
    seoTitle: "Expungement Lawyer San Diego | Record Sealing Attorney",
    metaDescription:
      "Clear your California record with EmailMyLawyer.com. We handle expungements (PC 1203.4), record sealing, and probation termination in San Diego. Free consult.",
    h1: "Expungement & Record Sealing Attorney in San Diego",
    heroSubhead:
      "Your past shouldn't define your future. We help San Diego clients clear their records and reclaim their opportunities.",
    intro:
      "An old conviction can quietly hold you back for years — costing you jobs, housing, and professional licenses long after you've paid your debt. California law offers powerful tools to clean up your record, and EmailMyLawyer.com helps San Diego clients use them. Through expungement under Penal Code 1203.4, we can have a qualifying conviction dismissed so you can lawfully tell most employers you were not convicted. We also pursue arrest-record sealing under PC 851.8 and 851.91, reductions of felonies to misdemeanors under PC 17(b), and early termination of probation. For those with a criminal past behind them, this is often the single most important step toward a fresh start. This page also covers probation-violation matters — because resolving a violation is frequently the first step toward clearing your record.",
    handles: [
      "Expungement of convictions (PC 1203.4)",
      "Reduction of felonies to misdemeanors (PC 17(b))",
      "Sealing of arrest records (PC 851.91)",
      "Factual-innocence petitions (PC 851.8)",
      "Early termination of probation",
      "Certificates of rehabilitation",
      "Governor's pardon applications",
      "Prop 47 resentencing and reclassification",
      "Restoration of firearm rights, where eligible",
      "Probation-violation defense",
    ],
    process: [
      {
        title: "Review Your Record",
        body: "We pull and analyze your criminal history to identify every conviction and arrest eligible for relief.",
      },
      {
        title: "Choose the Right Tool",
        body: "We match your situation to the best remedy — expungement, sealing, reduction, or a certificate of rehabilitation.",
      },
      {
        title: "File & Advocate",
        body: "We prepare and file the petitions and, when needed, appear in court to argue that relief serves the interests of justice.",
      },
      {
        title: "Confirm the Result",
        body: "We verify the record is updated so you can move forward with confidence in job and housing applications.",
      },
    ],
    penalties: {
      heading: "How Clearing Your Record Helps",
      body: "The right relief can reopen doors that a conviction closed. Eligibility depends on the offense, the sentence, and your compliance. This is general information, not legal advice.",
      points: [
        "Lawfully answer 'no' to most private-employer conviction questions",
        "Improve access to jobs, housing, and professional licensing",
        "Reduce a felony to a misdemeanor under PC 17(b)",
        "Potentially restore certain firearm and civil rights",
        "End probation early and put the case behind you",
      ],
    },
    faqs: [
      {
        q: "Am I eligible to expunge my conviction in California?",
        a: "Many misdemeanor and felony convictions qualify once you've completed probation and aren't currently charged with or serving a sentence for another offense. We'll review your record and tell you exactly what's possible.",
      },
      {
        q: "What does an expungement actually do?",
        a: "Under PC 1203.4, the court dismisses the conviction. For most private employment, you can then lawfully state you were not convicted, which removes a major barrier on job applications.",
      },
      {
        q: "Can a felony be reduced to a misdemeanor?",
        a: "Yes — many 'wobbler' felonies can be reduced under PC 17(b), and then expunged. This can restore certain rights and dramatically improve your record.",
      },
      {
        q: "Can I seal an arrest that never led to a conviction?",
        a: "Often, yes. Under PC 851.91, arrests that didn't result in conviction can frequently be sealed, and in cases of factual innocence, PC 851.8 offers even stronger relief.",
      },
      {
        q: "How long does the expungement process take?",
        a: "It varies by court and caseload, but many petitions resolve within a few months. We handle the filings and court appearances so you don't have to navigate it alone.",
      },
      {
        q: "I'm accused of violating probation. Can you help?",
        a: "Yes. We defend probation-violation allegations and work toward reinstatement rather than revocation — and once you're compliant, we can pursue early termination and expungement.",
      },
    ],
    related: ["theft-crimes-defense", "drug-crimes-defense", "dui-defense"],
  },
];

export const practiceAreasBySlug = Object.fromEntries(
  practiceAreas.map((p) => [p.slug, p]),
);

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreasBySlug[slug];
}
