import { teamM1, teamM2, teamM3, teamM4 } from "../assets/img/Image.js";

export default function Team() {
  const teamMember = [
    {
      name: "Ali Mumtaz",
      img: teamM1,
      role: "MLSA Lead",
      description:
        " DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      name: "Adnan Sultan",
      img: teamM2,
      role: "TechOps Lead",
      description:
        " DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      name: "Asjad Yousaf",
      img: teamM3,
      role: "Logistics Lead",
      description:
        " DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      name: "Ahmad Masood",
      img: teamM4,
      role: "TechOps Co-Lead",
      description:
        " DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      name: "Ali Mumtaz",
      img: teamM1,
      role: "MLSA Lead",
      description:
        " DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      name: "Adnan Sultan",
      img: teamM2,
      role: "TechOps Lead",
      description:
        " DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      name: "Asjad Yousaf",
      img: teamM3,
      role: "Logistics Lead",
      description:
        " DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      name: "Ahmad Masood",
      img: teamM4,
      role: "TechOps Co-Lead",
      description:
        " DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      name: "Ahmad Masood",
      img: teamM4,
      role: "TechOps Co-Lead",
      description:
        " DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      name: "Ahmad Masood",
      img: teamM4,
      role: "TechOps Co-Lead",
      description:
        " DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
  ];
  return (
    <section id="our-team" class="bg-gray-100 py-32">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8 text-primary">
          Meet Our Team
        </h2>
        <div class="grid grid-cols-1  gap-8 place-items-center ">
          <div class="bg-white  rounded-lg shadow-md p-6 my-6 text-center ">
            <img
              src={teamM1}
              alt="Team Member 1"
              className=" w-[260px] h-[260px] rounded-full mb-4 object-cover  "
            />
            <h3 class="text-xl font-semibold mb-2">Ali Mumtaz</h3>
            <p class="text-gray-700">MLSA Lead</p>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMember.map((member) => (
            <div class="bg-white  rounded-lg shadow-md p-6 my-6 text-center flex justify-center flex-col">
              <img
                src={member.img}
                alt="Team Member 1"
                className=" w-[160px] h-[160px] rounded-full mb-4 object-cover  self-center"
              />
              <h3 class="text-xl font-semibold mb-2">{member.name}</h3>
              <p class="text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
