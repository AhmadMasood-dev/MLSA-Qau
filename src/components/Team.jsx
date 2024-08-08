import {
  AliMumtaz,
  AhmadMasood,
  AsjadYousaf,
  SannanAdil,
  AwaisAli,
  HamzaKhan,
  HubabMasood,
  HumairaNadeem,
  MuhammadAdnanSultan,
  UmarFarooq,
  SafeenaAkhter,
  TalhaBilal,
  TatheerZahra,
  IshfaWaleed,
  WaseelAhmer,
} from "../assets/images/Image.js";

export default function Team() {
  const teamMember = [
    {
      name: "M.Adnan Sultan",
      img: MuhammadAdnanSultan,
      role: "TechOps Lead",
    },
    {
      name: "Ahmad Masood",
      img: AhmadMasood,
      role: "TechOps Co-Lead",
    },
    {
      name: "Hamza Khan",
      img: HamzaKhan,
      role: "Logistics Lead",
    },
    {
      name: "Asjad Yousaf",
      img: AsjadYousaf,
      role: "Logistics Co-Lead",
    },
    {
      name: "Sannan Adil",
      img: SannanAdil,
      role: "Graphics Lead",
    },
    {
      name: "Hubab Masood",
      img: HubabMasood,
      role: "Graphics Co-Lead",
    },
    {
      name: "Umar Farooq",
      img: UmarFarooq,
      role: "Media Lead",
    },
    {
      name: "Talha Bilal",
      img: TalhaBilal,
      role: " Media Co-Lead",
    },
    {
      name: "Humaira Nadeem",
      img: HumairaNadeem,
      role: "Content Lead",
    },
    {
      name: "Waseel Ahmer",
      img: WaseelAhmer,
      role: "Content Co-Lead",
    },
    {
      name: "Awais Ali",
      img: AwaisAli,
      role: "Marketing Lead",
    },
    {
      name: "Ishfa Waleed",
      img: IshfaWaleed,
      role: "Marketing Co-Lead",
    },
    {
      name: "Tatheer zahra ",
      img: TatheerZahra,
      role: "Women in Tech Lead",
    },
    {
      name: "Safeena akhter",
      img: SafeenaAkhter,
      role: "Women in Tech  Co-Lead",
    },
  ];
  return (
    <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl text-primary">
          Our team
        </h1>
        <p className="max-w-2xl text-center dark:text-gray-600">
          At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur
          quam natus quis nihil quod, hic explicabo doloribus magnam neque,
          exercitationem eius sunt!
        </p>
        <div className="flex flex-col justify-center m-8 text-center">
          <img
            alt=""
            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500  shadow-md shadow-black transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            src={AliMumtaz}
          />
          <p className="text-xl font-semibold leading-tight">Ali mumtaz</p>
          <p className="dark:text-gray-600">Lead</p>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          {teamMember.map((member) => (
            <div className="flex flex-col justify-center m-8 text-center ">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500  shadow-md shadow-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-200"
                src={member.img}
              />
              <p className="text-xl font-semibold leading-tight">
                {member.name}
              </p>
              <p className="dark:text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
