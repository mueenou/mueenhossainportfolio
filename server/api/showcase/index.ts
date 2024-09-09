import projects from "~/data/projects";

export default defineEventHandler((event) => {
  const datas = projects;
  return datas;
});
