import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pankaj from "../assets/pankaj.jpg";

export default function Information() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Dynamically load committee assets
  const committeeAssets = import.meta.glob(
    "../assets/variouscommittee/*.{webp,jpg,jpeg,png,pdf}",
    { eager: true },
  );

  const committees = [];
  const downloads = [];

  for (const path in committeeAssets) {
    const fileName = path.split("/").pop();
    const assetUrl = committeeAssets[path].default;

    // Convert camelCase or dashes to spaces and remove extension for title
    const title = fileName
      .replace(/\.(webp|jpg|jpeg|png|pdf)$/, "")
      .replace(/[-_]/g, " ")
      .replace(/([A-Z])/g, " $1")
      .trim();

    if (fileName.endsWith(".pdf")) {
      downloads.push({ title, url: assetUrl });
    } else {
      committees.push({ title, url: assetUrl });
    }
  }

  const teacher = [
    { name: "Dr.Pankaj", role: "Dean of Faculty", imageUrl: pankaj },
    { name: "Dr.Pankaj", role: "Dean of Faculty", imageUrl: pankaj },
    { name: "Dr.Pankaj", role: "Dean of Faculty", imageUrl: pankaj },
    { name: "Dr.Pankaj", role: "Dean of Faculty", imageUrl: pankaj },
  ];

  // Placeholder data for other staff
  const staffList = [
    { name: "Dr.Pankaj", role: "Dean of Faculty", imageUrl: pankaj },
    { name: "Dr.Pankaj", role: "Dean of Faculty", imageUrl: pankaj },
    { name: "Dr.Pankaj", role: "Dean of Faculty", imageUrl: pankaj },
    { name: "Dr.Pankaj", role: "Dean of Faculty", imageUrl: pankaj },
  ];

  const Section = ({ title, items, isImage = false }) => (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 flex flex-col gap-10">
      <div className="max-w-2xl">
        <h2
          className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl"
          data-aos="fade-right"
        >
          {title}
        </h2>
        <div
          className="h-1 w-20 bg-orange-500 mt-4 rounded-full"
          data-aos="fade-right"
          data-aos-delay="200"
        ></div>
      </div>

      {title === "Downloads" ? (
        <div className="">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-orange-300 transition-all group text-center gap-3"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <span className="font-medium text-gray-700 group-hover:text-orange-600 line-clamp-2">
                  {item.title}
                </span>
                <span className="text-orange-500 font-bold text-sm bg-orange-50 px-3 py-1 rounded-full">
                  ⬇ Download PDF
                </span>
              </a>
            ))}
          </div>
        </div>
      ) : isImage ? (
        <ul role="list" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <li key={idx} data-aos="fade-up" className="group">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md border border-gray-100">
                <img
                  src={item.url}
                  alt={item.title}
                  className="h-full w-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors text-center">
                {item.title}
              </h3>
            </li>
          ))}
        </ul>
      ) : (
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 sm:gap-y-16"
        >
          {items.map((person, idx) => (
            <li key={idx} data-aos="fade-up">
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      {/* Staff Sections */}
      <Section title="Teaching Staff" items={teacher} />
      <Section title="Nursing Staff" items={staffList} />
      <Section title="Non-Nursing Staff" items={staffList} />

      {/* Committee Sections - Dynamically Loaded */}
      {committees.length > 0 && (
        <Section title="Committees & Cells" items={committees} isImage={true} />
      )}

      {/* Downloads Section */}
      {downloads.length > 0 && <Section title="Downloads" items={downloads} />}
    </div>
  );
}
