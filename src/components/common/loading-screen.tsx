import Logo from "@/public/logo";

export default function LoadingScreen(): JSX.Element {
  return (
    <section className="flex size-full animate-pulse flex-col items-center justify-center gap-4">
      <Logo width={96} height={96} />
      {/* <h2 className="text-2xl font-semibold ">Visual Flow</h2> */}
    </section>
  );
}
