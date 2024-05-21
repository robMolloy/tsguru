export default function Page() {
  return (
    <div className="prose max-w-xxxl">
      <h1>Framework Recommendation</h1>
      <p>
        We can provide our services for any web framework, but it is important, especially in teams
        that are getting up to speed with typescript that there are as few barriers as possible to
        get a full understanding of TypeScript. With so many web frameworks available our clients
        often ask us to make a recommendation when starting a new project.
      </p>
      <p>
        At TS Gurus we recommend our clients use React. There are different pros and cons to all web
        framework, from developer experience to performance. However, many of the React alternatives
        have ways of abstracting you away from the TypeScript types, either due to compilation or
        rendering mecahnisms. React provides an excellent typing system that gives direct access to
        types.
      </p>
      <p>
        One way to show how React differs from other frameworks is that unlike Svelte, the dev
        server doesn't even need to be running for the type system to work correctly, as Svelte has
        a compilation step. We don't suggest that you start making code changes without a dev server
        running, but Svelte's compilation step can sometimes be unreliable causing "bugs" that would
        be fixed if the server was just restarted - how annoying!
      </p>
    </div>
  );
}
