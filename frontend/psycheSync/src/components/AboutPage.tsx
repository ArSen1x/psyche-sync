import { Zap, ShieldCheck, Smartphone, Lock, AlertTriangle } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Instant Translation",
    body: "Search for a clinical term like "Depression" or "Social Anxiety" and instantly find the corresponding 2026 ICD-10-CM code.",
  },
  {
    icon: ShieldCheck,
    title: "Clinical Guardrails",
    body: "View critical Excludes notes and instructional hierarchies to ensure diagnostic accuracy and billing compliance.",
  },
  {
    icon: Smartphone,
    title: "Always Accessible",
    body: "Designed as a Progressive Web App (PWA) so you can pull it up on a phone, tablet, or desktop right at the clinic desk.",
  },
]

export default function AboutPage() {
  return (
    <div className="space-y-5 pb-8">

      {/* Hero / Mission */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm px-5 py-5">
        <p className="text-[10px] font-bold text-sage-500 uppercase tracking-widest mb-1.5">
          Our Mission
        </p>
        <h1 className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-snug mb-2">
          Bridging the Gap Between Clinical Theory and Practice
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-slate-800 dark:text-slate-100">PsycheSync</span> is a
          digital reference tool designed specifically for psychology students, clinical interns, and
          mental health professionals — making it as intuitive as possible to navigate diagnostic codes
          so clinicians can focus less on paperwork and more on their patients.
        </p>
      </div>

      {/* Story */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm px-5 py-5">
        <p className="text-[10px] font-bold text-sage-500 uppercase tracking-widest mb-1.5">
          The Story
        </p>
        <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2.5">
          Why PsycheSync Exists
        </h2>
        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            PsycheSync was born out of a firsthand look at the challenges psychology students face
            during clinical training.
          </p>
          <p>
            In the classroom, students rely on the{" "}
            <span className="font-semibold text-slate-700 dark:text-slate-200">DSM-5-TR</span> — a
            brilliantly detailed, qualitative guide to understanding mental health. But in the clinic,
            insurance and medical records require translating those nuanced diagnoses into alphanumeric{" "}
            <span className="font-semibold text-slate-700 dark:text-slate-200">ICD-10-CM</span>{" "}
            billing codes.
          </p>
          <p>
            Cross-referencing a heavy textbook with a massive code database is tedious and
            error-prone. PsycheSync is the digital bridge between these two worlds — a lightning-fast,
            mobile-friendly way to search, verify, and understand diagnostic codes on the fly.
          </p>
        </div>
      </div>

      {/* Features */}
      <div>
        <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5 px-1">
          What PsycheSync Does
        </p>
        <div className="space-y-2.5">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm px-4 py-4 flex gap-3.5 items-start border-l-[3px] border-l-sage-400 dark:border-l-sage-600"
            >
              <div className="shrink-0 mt-0.5 w-7 h-7 rounded-lg bg-sage-50 dark:bg-sage-900/40 border border-sage-200 dark:border-sage-700 flex items-center justify-center">
                <Icon size={14} className="text-sage-600 dark:text-sage-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-0.5">
                  {title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PHI Privacy note */}
      <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900 rounded-2xl px-4 py-4 flex gap-3 items-start">
        <Lock size={15} className="text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300 mb-0.5">
            Privacy First
          </p>
          <p className="text-xs text-emerald-700 dark:text-emerald-400 leading-relaxed">
            No patient data (PHI) is ever collected, tracked, or stored by this application. PsycheSync
            runs entirely in your browser.
          </p>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-2xl px-4 py-4">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle size={15} className="text-amber-500 dark:text-amber-400 shrink-0" />
          <p className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
            Important Clinical Disclaimer
          </p>
        </div>
        <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
          PsycheSync is an <span className="font-semibold">educational reference tool</span> and is
          not affiliated with the World Health Organization (WHO) or the American Psychiatric
          Association (APA). It does not contain the proprietary text of the DSM-5-TR and is{" "}
          <span className="font-semibold">
            not a substitute for professional clinical judgment, official medical training, or formal
            diagnostic manuals.
          </span>{" "}
          Always consult official guidelines when making diagnostic or billing decisions.
        </p>
      </div>

    </div>
  )
}
