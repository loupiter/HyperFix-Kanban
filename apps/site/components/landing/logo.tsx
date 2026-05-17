import Image from "next/image";

export function Logo() {
  return (
    <span className="inline-flex items-center">
      <Image
        src="/logo-dark.svg"
        alt="HyperFix"
        className="h-12 w-auto dark:hidden"
        width={48}
        height={48}
      />
      <Image
        src="/logo-light.svg"
        alt="HyperFix"
        className="hidden h-12 w-auto dark:block"
        width={48}
        height={48}
      />
    </span>
  );
}
