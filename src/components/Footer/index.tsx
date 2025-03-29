export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto py-4 px-custom md:px-4 lg:px-10">
      <div className="text-center tracking-wide text-sm">&copy;{year} Takuya Oshima All rights reserved</div>
    </footer>
  );
};
