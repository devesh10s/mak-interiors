interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  description, 
  centered = false,
  className = ''
}: SectionHeaderProps) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <p className="text-accent-600 font-medium text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-neutral-600 max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

