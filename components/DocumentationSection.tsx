import H2 from "./headings/H2";

export default function DocumentationSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <H2>{title}</H2>
      {children}
    </>
  );
}
