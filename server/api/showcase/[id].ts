import projects from "~/data/projects";

export default defineEventHandler((event) => {
  const { id } = event.context.params as { id: string };
  const foundElement = projects.find((project) => project.id === Number(id));
  return foundElement;
});
