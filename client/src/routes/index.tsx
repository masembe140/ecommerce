import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {
  return (
    <>
      <h1>welcome home sir</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Ecommerce",
  meta: [
    {
      name: "description",
      content: "Number one online shop",
    },
  ],
};
