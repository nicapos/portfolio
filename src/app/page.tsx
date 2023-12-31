import Image from 'next/image';
import Link from 'next/link';
import ExperienceCard from '@/components/ExperienceCard';
import ProjectCard from '@/components/ProjectCard';
import TagGroup from '@/components/TagGroup';
import ParticlesContainer from '@/components/ParticlesContainer';

import api from '@/lib/api';
import { lora } from '@/lib/fonts';
import { splitArray } from '@/lib/utils';
import { socials } from '@/config/links';

export default async function Home() {
  const projects = await api.getAllProjects();

  const workExperiences = await api.getExperiencesByType('work');
  const orgExperiences = await api.getExperiencesByType('org');

  const skillGroups = await api.getAllSkillGroups();

  return (
    <>
      <main
        id="main"
        className="relative flex min-h-screen flex-col items-center justify-center text-center text-5xl md:text-6xl"
      >
        <ParticlesContainer />
        <h2 className={lora.className}>
          <i>hello! i&apos;m</i>
        </h2>
        <h1 className="mb-8 mt-2 font-bold">Annika Posadas</h1>

        <div className="flex gap-6">
          <Link href={socials.github} target="_blank">
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={50}
              height={50}
            />
          </Link>
          <Link href={socials.linkedin} target="_blank">
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </main>

      <section id="about-me" className="min-h-[50vh] px-6 py-24 lg:px-12">
        <h2 className="mb-2 text-4xl">about me</h2>
        <hr className="mb-4 h-1 w-60 border-0 bg-gradient-to-r from-[#FD4523] to-[#FFE74C]" />
        <p className="mb-12 text-justify lg:text-lg">
          I&apos;m a 4th year undergraduate student in De La Salle University,
          studying Computer Science with a major in Software Technology and a
          minor in Data Science. I have a strong background in web development,
          covering both frontend and backend development, and I&apos;m exploring
          data analytics as well. When it comes to programming, JavaScript and
          Python are my strengths. I&apos;m a team-player who can also work
          independently. Most importantly, I&apos;m always open to learning and
          improving my abilities.
        </p>

        <div className="flex flex-wrap gap-y-6 md:gap-x-6">
          {splitArray(skillGroups, 2).map((groups, idx) => (
            <div key={idx} className="flex flex-col gap-6 md:flex-1">
              {groups.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-2 text-2xl">{group.title}</h3>
                  <TagGroup tags={group.skills} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="min-h-[50vh] px-6 py-24 lg:px-12">
        <h2 className="mb-2 text-4xl">projects</h2>
        <hr className="mb-4 h-1 w-60 border-0 bg-gradient-to-r from-[#FD4523] to-[#FFE74C]" />

        <p className="mb-6">
          Here are some projects I&apos;ve worked as a part of my courseworks or
          during my free time. To view more projects, check out my{' '}
          <Link className="gradient-link" href={socials.github}>
            GitHub profile.
          </Link>
        </p>

        <div className="grid grid-cols-1 justify-center gap-x-8 gap-y-12 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="experience" className="min-h-[50vh] px-6 py-24 lg:px-12">
        <h2 className="mb-2 text-4xl">experience</h2>
        <hr className="mb-6 h-1 w-60 border-0 bg-gradient-to-r from-[#FD4523] to-[#FFE74C]" />

        <div className="flex flex-col gap-12">
          {[...workExperiences, ...orgExperiences].map((exp) => (
            <ExperienceCard key={exp.company + exp.title} {...exp} />
          ))}
        </div>
      </section>

      <section id="contact-me" className="min-h-[50vh] p-6 md:pt-24 lg:p-12">
        <h2 className="mb-2 text-4xl">contact me</h2>
        <hr className="mb-10 h-1 w-60 border-0 bg-gradient-to-r from-[#FD4523] to-[#FFE74C]" />

        <div className="flex flex-col gap-8 text-xl">
          <Link
            href={`mailto:${socials.mail}`}
            target="_blank"
            className="flex items-center gap-5"
          >
            <Image src="/icons/mail.svg" alt="GitHub" width={36} height={36} />
            {socials.mail}
          </Link>
          <Link
            href={socials.github}
            target="_blank"
            className="flex items-center gap-5"
          >
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={36}
              height={36}
            />
            nicapos
          </Link>
          <Link
            href={socials.linkedin}
            target="_blank"
            className="flex items-center gap-5"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={36}
              height={36}
            />
            annika-posadas
          </Link>
        </div>
      </section>
    </>
  );
}
