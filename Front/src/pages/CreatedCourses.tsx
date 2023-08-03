import ListComponent from "@/components/ListComponent";

function CreatedCourses() {
  return (
    <section className="container max-w-lg mx-auto md:mt-28">
      <h1 className="mb-4 font-semibold text-title">Cursos creados</h1>
      <ListComponent title="Titulo del curso" type="created" />
    </section>
  );
}

export default CreatedCourses;
