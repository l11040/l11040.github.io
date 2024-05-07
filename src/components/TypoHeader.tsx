interface TypoHeaderProps {
  title: string;
}

export default function TypoHeader({ title }: TypoHeaderProps) {
  return (
    <div className="prose lg:prose-md">
      <h1 className="text-slate-500 dark:text-slate-200">{title}</h1>
    </div>
  );
}
