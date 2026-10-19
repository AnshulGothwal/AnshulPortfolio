function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment =
    align === 'center'
      ? 'mx-auto max-w-2xl text-center'
      : 'max-w-2xl text-left'

  return (
    <div className={alignment}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
