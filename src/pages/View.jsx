import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const View = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-gray-50 min-h-screen space-y-12">
      {/* Card 1: Casualty & Emergency Services */}
      <div
        className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 border border-gray-100"
        id="emergency"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200">
          Casualty & Emergency Services
        </h1>

        <div className="space-y-10">
          {/* Emergency Services Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-700 uppercase mb-4 tracking-wide border-l-4 border-orange-500 pl-3">
              EMERGENCY SERVICES
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  It is located Room No.{" "}
                  <span className="font-bold text-gray-800">1055</span> Ground
                  floor, Emergency Block.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  The Contact No.'s are{" "}
                  <a
                    href="tel:7055400400"
                    className="font-bold text-blue-600 hover:underline"
                  >
                    7055400400
                  </a>
                  ,{" "}
                  <a
                    href="tel:7500036669"
                    className="font-bold text-blue-600 hover:underline"
                  >
                    7500036669
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Control Room functions round the clock, under the Dept. of
                  Hospital Administration and managed by Medical Superintendent,
                  who deal with any administrative problem, provide assistance
                  and listen to public grievances with regard to patient care.
                </span>
              </li>
            </ul>
          </div>

          {/* Emergency Medicine Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-700 uppercase mb-4 tracking-wide border-l-4 border-orange-500 pl-3">
              EMERGENCY MEDICINE
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  <strong className="text-gray-800">
                    Phone Number of Emergency: -
                  </strong>{" "}
                  <a
                    href="tel:7055400400"
                    className="font-bold text-blue-600 hover:underline"
                  >
                    7055400400
                  </a>{" "}
                  (round the clock)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  <strong className="text-gray-800">Location:</strong> Ground
                  Floor, Emergency Block, KDMCHRC.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  These services are available 24 hours a day, throughout the
                  year.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Anyone with urgent medical problem can seek
                  consultation/treatment in the Emergency.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  If Doctors decide that you need urgent medical intervention,
                  you will be registered at the Emergency registration counter,
                  free of charge and proper medical care will be provided
                  promptly.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Emergency has dedicated team of{" "}
                  <strong className="text-gray-800">Doctors</strong> from major
                  specialties (i.e. Emergency Medicine, Surgery & Pediatrics)
                  and Residents, Doctors,{" "}
                  <strong className="text-gray-800">Nurses</strong>, Paramedics
                  and Hospital Attendants etc. to provide urgent medical
                  services.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  We endeavor to provide medical care (incl. Investigation &
                  treatment) at the earliest possible time. Those cases that are
                  not so urgent may have to wait for some time.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  The treating doctors will call any
                  specialist/super-specialist, who is available on call for
                  urgent consultation as and when required.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  In serious cases treatment/management gets priority over paper
                  work like registration/Medico-Legal requirements.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Emergency has fully equipped{" "}
                  <strong className="text-gray-800">Operation Theatre</strong>{" "}
                  for any urgent surgery etc.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  The Emergency is{" "}
                  <strong className="text-gray-800">
                    fully equipped with all modern gadgets
                  </strong>{" "}
                  like monitors, ventilators, nebulisers, defibrillators,
                  central O2, Vacuum and suction supply etc.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  <strong className="text-gray-800">
                    All urgent investigations
                  </strong>{" "}
                  like Blood Biochemistry, Urine Toxicology, Blood Gas Analysis,
                  ECG, USG, X-ray etc. are available for casualty patients round
                  the clock
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  All medicines and surgical items available in Emergency are
                  provided round the clock.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  For any guidance/assistance including financial help for poor
                  and indigent patients and Medical Superintendent is available.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Facilities like patients trolleys are available at the
                  entrance of Emergency.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Public utilities like toilets, waiting area with
                  Tea/Coffee/Snacks, fans, chairs etc. are available.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Card 2: General Information */}
      <div
        className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 border border-gray-100"
        id="general-info"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200">
          General Information
        </h1>

        <div className="space-y-10">
          {/* Location Info */}
          <div>
            <p className="text-gray-800 font-medium text-lg leading-relaxed">
              KDMCHRC Main Hospital is located at 24 km milestone, Mathura-Delhi
              Road, NH #2, P.O. Akbarpur, Chhata, Mathura (U.P.).
            </p>
          </div>

          {/* Beds, Doctors, Nurses */}
          <div>
            <h2 className="text-xl font-bold text-gray-700 uppercase mb-4 tracking-wide border-l-4 border-orange-500 pl-3">
              NUMBER OF BEDS, DOCTORS, NURSES ETC.
            </h2>
            <ul className="space-y-2 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  The hospital has a total of{" "}
                  <strong className="text-gray-800">300 bed</strong> Multi
                  Specialty Hospital
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  There are{" "}
                  <strong className="text-gray-800">110 doctors</strong> (incl.
                  Faculty members, Sr. and Jr. Residents) and{" "}
                  <strong className="text-gray-800">180 Nurses</strong>.
                </span>
              </li>
            </ul>
          </div>

          {/* Enquiry Info */}
          <div>
            <h2 className="text-xl font-bold text-gray-700 uppercase mb-4 tracking-wide border-l-4 border-orange-500 pl-3">
              ENQUIRY AND INFORMATION ABOUT KDMCHRC
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Central Enquiry & Registration Office is located just inside
                  main entrance of the OPD Block.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Telephone No.’s of Central Enquiry—{" "}
                  <a
                    href="tel:7055400400"
                    className="text-blue-600 hover:underline"
                  >
                    7055400400
                  </a>
                  ,{" "}
                  <a
                    href="tel:7500036669"
                    className="text-blue-600 hover:underline"
                  >
                    7500036669
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Guide maps, Display boards are installed at various strategic
                  locations.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Enquiry Counters & help desks also exist in the OPD at various
                  locations where one can enquire.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Medical Superintend Office is Located in MSSO/Social Guides
                  are available for any help.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Website –{" "}
                  <a
                    href="http://www.kdmch.in"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    www.kdmch.in
                  </a>
                  ,{" "}
                  <a
                    href="mailto:kdmchrc@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    kdmchrc@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span className="text-xl">
                  Toll Free Number: -{" "}
                  <a
                    href="tel:18002704121"
                    className="font-bold text-gray-800 hover:text-blue-600"
                  >
                    1800-270-4121
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Card 3: Indoor Services */}
      <div
        className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 border border-gray-100"
        id="indoor-services"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200">
          Indoor Services
        </h1>

        <div className="space-y-10">
          {/* General Indoor Info */}
          <div>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  All in-patients receive treatment by team of{" "}
                  <strong className="text-gray-800">
                    Resident Doctors and nurses
                  </strong>
                  , available round the clock, under the supervision and
                  guidance of{" "}
                  <strong className="text-gray-800">Faculty Members</strong> of{" "}
                  <strong className="text-gray-800">KDMCHRC</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Hospital Attendants are available in different wards to help
                  in patient care and related activities.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  All the wards are fully equipped with modern gadgets &
                  equipments e.g. ventilators, monitors, defibrillators,
                  nebulisers; central O2 & suction supply etc. to provide top
                  quality medical care
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Indoor services have central air conditioning, hot and cold
                  water, toilets, portable X-ray machines, ECG services,
                  Generator back up, emergency lights, internal telephone,
                  chairs for attendants etc.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Waste disposal is done as per the established rules
                  (Biomedical waste management and handling rules, 1998) and
                  amended Rules, 2000 utmost care is taken to keep the premises
                  neat and clean.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Every inpatient is provided with two attendant passes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Visitors are allowed only during notified visiting hours i.e.
                  4:00 p.m. to 6:00 p.m.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Special Investigations like USG etc. are changed as per the
                  rates approved by KDMCHRC and revised from time to time.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  For very poor patients, on recommendation of treating Doctor,
                  the hospital charges may be waived off by Med. Supdt./his
                  nominee and costly drugs/surgical items may be provided by the
                  hospital.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Bed linen is changed at the time of admission and thereafter
                  on every alternate day and also whenever required.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Food is served three times a day. Also, Tea is provided in the
                  morning.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Day care facility is available for certain types of
                  operations. e.g. laproscopic surgery; day care chemotherapy;
                  blood transfusion, dialysis, endoscopies and similar
                  interventions.
                </span>
              </li>
            </ul>
          </div>

          {/* Operation Theatres */}
          <div>
            <h2 className="text-xl font-bold text-gray-700 uppercase mb-4 tracking-wide border-l-4 border-orange-500 pl-3">
              Operation theatres
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  The institute has fully equipped modern operation Theatres,
                  where all kinds of major and minor surgeries are performed
                  using the latest techniques and technology.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  For routine surgeries departments maintain waiting list.
                  Patients are called and operated upon as per the waiting list.
                  But, in case of emergencies/urgencies, the out of turn
                  surgeries are also performed, at the discretion at the
                  treating doctors.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  The patient should get his Pre-Anaesthetic check up done in
                  PAC Room, OPD Block during afternoon before getting admitted
                  for operation and follow the instructions given by the
                  treating Doctors.
                </span>
              </li>
            </ul>
          </div>

          {/* ICUs */}
          <div>
            <h2 className="text-xl font-bold text-gray-700 uppercase mb-4 tracking-wide border-l-4 border-orange-500 pl-3">
              ICUs
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The hospital has fully equipped Main ICU at Emergency Block at
              First floor. Patients requiring urgent ICU care are admitted to
              ICUs at discretion of treating Doctors.
            </p>
          </div>

          {/* Laboratory Services */}
          <div>
            <h2 className="text-xl font-bold text-gray-700 uppercase mb-4 tracking-wide border-l-4 border-orange-500 pl-3">
              Laboratory Services
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Emergency Lab – 24 hours, throughout the year, for all
                  emergency investigations.
                </span>
              </li>
              <li className="flex items-start gap-3 ml-6 md:ml-8">
                <span className="text-gray-400 text-lg mt-1">•</span>
                <span>
                  Routine Lab - Sample collection timings: - Weeks Days - 9:00
                  a.m. to 3:00 p.m.(Monday to Saturday)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  All types of routine and special investigations incl.
                  Biochemical, Microbiological, Pathology, Immunology and
                  genetic studies are done at KDMCHRC.
                </span>
              </li>
            </ul>
          </div>

          {/* Miscellaneous Facilities */}
          <div>
            <h2 className="text-xl font-bold text-gray-700 uppercase mb-4 tracking-wide border-l-4 border-orange-500 pl-3">
              Miscellaneous Facilities
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Will equipped ambulance facility is available to meet any
                  exigency/disaster situation.
                </span>
              </li>
              <li className="flex items-start gap-3 ml-6 md:ml-8">
                <span className="text-gray-400 text-lg mt-1">•</span>
                <span>
                  If required, patients' attendants may stay in{" "}
                  <strong className="text-gray-800">KDMCHRC Dharamshala</strong>{" "}
                  after paying the prevailing charges situated near the OPD
                  Block of KDMCHRC.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Card 4: Out Patient Services */}
      <div
        className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 border border-gray-100"
        id="opd-services"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200">
          Out Patient Services
        </h1>

        <div className="space-y-8">
          {/* Location & Timings */}
          <div className="bg-[#FFFBF5] rounded-xl p-6 border border-orange-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-orange-500">📍</span> Location: - OPD
              services are situated at OPD Block.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg p-4 shadow-sm border border-orange-100">
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Registration Time
                </h3>
                <p className="text-lg font-bold text-gray-800">
                  9:00 a.m. to 3:00 p.m.
                </p>
                <p className="text-sm text-gray-500">(General OPD)</p>
              </div>
              <div className="md:border-l md:border-orange-100 md:pl-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Consultation Time
                </h3>
                <p className="text-lg font-bold text-gray-800">
                  9:00 a.m. to 4:00 p.m.
                </p>
                <p className="text-sm text-gray-500">(General OPD)</p>
              </div>
            </div>
          </div>

          {/* Registration & Consultation Rules */}
          <div>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  OPD Card costing Rs. 20/- can be purchased from main counter,
                  OPD ground floor. After this, you should get yourself
                  registered at the counter of respective OPDs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  You have right to consult any doctor/consultant. For seeking
                  appointment with any consultant on his OPD days, you may
                  contact his/her office.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Patients are seen on first come first serve basis. However,
                  out of turn consultation may be provided in case of emergency
                  or to senior citizens.
                </span>
              </li>
            </ul>
          </div>

          {/* Investigations */}
          <div>
            <h2 className="text-xl font-bold text-gray-700 uppercase mb-4 tracking-wide border-l-4 border-orange-500 pl-3">
              Investigations
            </h2>
            <p className="text-gray-600 mb-4">
              After OPD consultation, the treating doctor will fill up the
              requisition from for various investigations & direct/guide you to
              the concerned lab/dept.
            </p>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-lg mt-1">•</span>
                  <span>
                    <strong className="text-gray-800">
                      Sample Collection center
                    </strong>{" "}
                    for Blood, Urine, Stool etc. – Diagnostic Block, Ground
                    Floor.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-lg mt-1">•</span>
                  <span>
                    <strong className="text-gray-800">
                      Sample Collection Timings are:
                    </strong>{" "}
                    - 9:00 a.m. to 4:00 p.m.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-lg mt-1">•</span>
                  <span>
                    The report normally reaches the concerned OPD on the next
                    OPD day.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-lg mt-1">•</span>
                  <span>
                    Certain investigations will nominal charge while others are
                    charged as per the prevailing norms fixed by KDMCHRC.
                    Patients should Deposit the money only at the OPD hospital
                    Cash Counters and obtain the proper receipt.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-lg mt-1">•</span>
                  <span>
                    Due to excess work load, waiting period exists for certain
                    investigations like USG etc. Patient are given future dates
                    by the concerned departments. However, these may be done out
                    of turn in urgent situations, on recommendation of the
                    treating doctor.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* General Facilities */}
          <div>
            <h2 className="text-xl font-bold text-gray-700 uppercase mb-4 tracking-wide border-l-4 border-orange-500 pl-3">
              Facilities & Guidelines
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Many facilities are provided at OPD level, e.g.{" "}
                  <strong className="text-gray-800">
                    ECG, Plaster, Injection, immunization, contraception and MTP
                    Services, Minor Surgical Intervention, Physiotherapy,
                    Bronchoscopy, Endoscopy
                  </strong>
                  , etc.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  <strong className="text-gray-800">
                    The decision to admit a patient rests with the treating
                    doctor.
                  </strong>{" "}
                  The patient will be admitted if there is a vacant bed
                  available. But in case of emergency, out of turn admission may
                  be done.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Wheel chair, patient trolleys etc. are available free of
                  charge at the entrance of OPD & Emergency.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  OPD have waiting hall with chairs, TVs, lifts, ramps for Ortho
                  OPD, public utilities like drinking water & toilets etc. at
                  each floor.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  You should park your vehicle in the{" "}
                  <strong className="text-gray-800">parking</strong> only
                  otherwise it is likely to be towed away.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  To meet day-to-day needs of patients, there is a Canteen and
                  Medical Store.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Card 5: Complaint & Grievances */}
      <div
        className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 border border-gray-100"
        id="complaints"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200">
          Complaint & Grievances
        </h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gray-700 uppercase mb-4 tracking-wide border-l-4 border-orange-500 pl-3">
              COMPLAINTS AND GRIEVANCES
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  There will be occasions when our services will not be up to
                  your expectations.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Please do not hesitate to register your complaints. It will
                  only help as serve you better.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  You may lodge your complaints to the Medical Supdt. in M.S.
                  Office. Every complaint will be duly acknowledged and sincere
                  attempt will be made to solve your problem.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Please don't indulge in any money transactions with any person
                  them.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Please refrain from demanding under favours from the staff and
                  officials.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Please provide useful feedback and constructive suggestions.
                  These may be addressed to the Medical Superintendent of the
                  Hospital.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* card 6: Responsibilities Of Users */}
      <div
        className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 border border-gray-100"
        id="responsibilities"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200">
          Responsibilities Of Users
        </h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gray-700 uppercase mb-4 tracking-wide border-l-4 border-orange-500 pl-3">
              RESPONSIBILITIES OF USERS
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  The success of this charter depends on the support we receive
                  from our users.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Please try to appreciate the various constraints under which
                  the hospital is functioning.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Please follow the rules and regulations of the hospital while
                  inside the hospital campus.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Please do not cause inconvenience to other patients by
                  crowding or making noise unnecessarily.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Please help us in keeping the hospital and its surroundings
                  neat and clean.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Please don't argue with security guards, show your passes when
                  asked for & help maintain the order and peace inside the
                  hospital premises.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Please use the facilities of this hospital with care and do
                  not damage/ spoil hospital property.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Beware of Touts & unauthorized persons. Don't indulge in any
                  money transactions with any person.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Please don't indulge in any money transactions with any person
                  them.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Please refrain from demanding under favours from the staff and
                  officials.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">»</span>
                <span>
                  Please provide useful feedback and constructive suggestions.
                  These may be addressed to the Medical Superintendent of the
                  Hospital.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
