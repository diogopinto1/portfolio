import React, { useEffect, useMemo, useState } from "react";
import { skillBadges, impactHighlights, toolbox, projects, categories, cvData, site } from "../mock";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import ProjectCard from "../components/ProjectCard";
import { useToast } from "../hooks/use-toast";

export function HomePage(){
  return (
    <div className="space-y-10">
      <section className="hero rounded-md p-8 md:p-10">
        <div className="max-w-3xl">
          <div className="label text-xs uppercase tracking-wider text-[color:var(--green-800)] mb-3">Diogo Pinto</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight" style={{ fontFamily:'Space Grotesk' }}>
            Data Scientist with Green Engineering Roots
          </h1>
          <p className="mt-4 text-[color:var(--muted-2)] max-w-2xl">
            I connect agronomy and machine learning to build decision systems that conserve resources and deliver measurable impact.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {skillBadges.map(s => (
              <Badge key={s} className="bg-[color:var(--green-50)] text-[color:var(--green-800)] border border-[color:var(--green-200)]">{s}</Badge>
            ))}
          </div>
          <div className="mt-7 flex gap-3">
            <Button className="bg-[color:var(--green-800)] hover:bg-[color:var(--green-600)] text-white" onClick={()=>window.location.assign('/portfolio')}>View Portfolio</Button>
            <Button variant="outline" className="border" style={{ borderColor:'var(--border)' }} onClick={()=>window.location.assign('/contact')}>About me</Button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-4" style={{ fontFamily:'Space Grotesk' }}>Impact Highlights</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {impactHighlights.map((h) => (
            <Card key={h.title} className="border" style={{ borderColor:'var(--border)' }}>
              <CardHeader>
                <div className="text-sm text-[color:var(--muted-2)]">{h.title}</div>
                <div className="text-2xl" style={{ fontFamily:'Space Grotesk' }}>{h.metric}</div>
              </CardHeader>
              <CardContent className="text-sm text-[color:var(--muted-2)]">{h.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-4" style={{ fontFamily:'Space Grotesk' }}>Toolbox</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="border" style={{ borderColor:'var(--border)' }}>
            <CardHeader className="text-sm">Languages & Libraries</CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {[...toolbox.languages, ...toolbox.libs].map(i => <Badge key={i} className="bg-[color:var(--green-50)] text-[color:var(--green-800)] border border-[color:var(--green-200)]">{i}</Badge>)}
            </CardContent>
          </Card>
          <Card className="border" style={{ borderColor:'var(--border)' }}>
            <CardHeader className="text-sm">Data & MLOps</CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {[...toolbox.data].map(i => <Badge key={i} className="bg-[color:var(--green-50)] text-[color:var(--green-800)] border border-[color:var(--green-200)]">{i}</Badge>)}
            </CardContent>
          </Card>
          <Card className="border" style={{ borderColor:'var(--border)' }}>
            <CardHeader className="text-sm">Geo & Cloud</CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {[...toolbox.geo, ...toolbox.cloud].map(i => <Badge key={i} className="bg-[color:var(--green-50)] text-[color:var(--green-800)] border border-[color:var(--green-200)]">{i}</Badge>)}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export function ProfilePage(){
  const items = [
    { label: "Agronomy →", body: "Field research, soil and crop systems, GIS foundations." },
    { label: "Data Science →", body: "ML modeling, time series, and deployment for decisions." },
    { label: "Today", body: "Freelance projects for agri/food/env orgs with measurable impact." },
  ];
  return (
    <div className="space-y-8">
      <h1 className="text-3xl" style={{ fontFamily:'Space Grotesk' }}>Profile</h1>
      <p className="text-[color:var(--muted-2)] max-w-2xl">I combine agronomic engineering with applied machine learning to build clear, reproducible solutions. I focus on resource efficiency, model reliability, and delivering impact stakeholders can trust.</p>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map(i => (
          <Card key={i.label} className="border" style={{ borderColor:'var(--border)' }}>
            <CardHeader className="text-sm text-[color:var(--muted-2)]">{i.label}</CardHeader>
            <CardContent>{i.body}</CardContent>
          </Card>
        ))}
      </div>
      <div>
        <h2 className="text-2xl mb-4" style={{ fontFamily:'Space Grotesk' }}>What I do</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {cvData.skillsMatrix.map(s => (
            <Card key={s.area} className="border" style={{ borderColor:'var(--border)' }}>
              <CardHeader className="text-sm">{s.area}</CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {s.items.map(it => <Badge key={it} className="bg-[color:var(--green-50)] text-[color:var(--green-800)] border border-[color:var(--green-200)]">{it}</Badge>)}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CVPage(){
  const [mode, setMode] = useState('short');
  const exp = mode==='short' ? cvData.experience.slice(0,1) : cvData.experience;
  const { toast } = useToast();
  const onDownload = () => toast({ title:'Download CV', description:'Mocked PDF download.' });
  useEffect(()=>{ document.title = `CV — ${site.name}` },[]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl" style={{ fontFamily:'Space Grotesk' }}>Curriculum Vitae</h1>
        <div className="flex gap-2">
          <Button variant={mode==='short'? 'default':'outline'} className={mode==='short'? 'bg-[color:var(--green-800)] hover:bg-[color:var(--green-600)] text-white':'border'} style={mode==='short'?{}:{ borderColor:'var(--border)'}} onClick={()=>setMode('short')}>Short</Button>
          <Button variant={mode==='detailed'? 'default':'outline'} className={mode==='detailed'? 'bg-[color:var(--green-800)] hover:bg-[color:var(--green-600)] text-white':'border'} style={mode==='detailed'?{}:{ borderColor:'var(--border)'}} onClick={()=>setMode('detailed')}>Detailed</Button>
          <Button variant="outline" className="border" style={{ borderColor:'var(--border)' }} onClick={onDownload}>Download PDF</Button>
        </div>
      </div>

      <section>
        <h2 className="text-xl mb-3" style={{ fontFamily:'Space Grotesk' }}>Experience</h2>
        <div className="space-y-4">
          {exp.map((e)=> (
            <Card key={e.role} className="border" style={{ borderColor:'var(--border)' }}>
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg" style={{ fontFamily:'Space Grotesk' }}>{e.role}</div>
                    <div className="text-sm text-[color:var(--muted-2)]">{e.org}</div>
                  </div>
                  <div className="text-sm text-[color:var(--muted-2)]">{e.period}</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-5 space-y-2 text-sm">
                  {e.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        <Card className="border" style={{ borderColor:'var(--border)' }}>
          <CardHeader className="text-sm">Education</CardHeader>
          <CardContent className="text-sm space-y-2">{cvData.education.map(ed => <div key={ed.title}><div className="font-medium">{ed.title}</div><div className="text-[color:var(--muted-2)]">{ed.org}</div></div>)}</CardContent>
        </Card>
        <Card className="border" style={{ borderColor:'var(--border)' }}>
          <CardHeader className="text-sm">Certifications</CardHeader>
          <CardContent className="flex flex-wrap gap-2">{cvData.certs.map(c => <Badge key={c} className="bg-[color:var(--green-50)] text-[color:var(--green-800)] border border-[color:var(--green-200)]">{c}</Badge>)}</CardContent>
        </Card>
        <Card className="border" style={{ borderColor:'var(--border)' }}>
          <CardHeader className="text-sm">Skills Matrix</CardHeader>
          <CardContent className="text-sm space-y-2">{cvData.skillsMatrix.map(s => <div key={s.area}><div className="font-medium">{s.area}</div><div className="text-[color:var(--muted-2)]">{s.items.join(', ')}</div></div>)}</CardContent>
        </Card>
      </section>
    </div>
  );
}

export function PortfolioPage(){
  const [tab, setTab] = useState('all');
  const filtered = useMemo(()=> tab==='all'? projects : projects.filter(p => p.category===tab), [tab]);
  useEffect(()=>{ document.title = `Portfolio — ${site.name}` },[]);
  return (
    <div className="space-y-6">
      <h1 className="text-3xl" style={{ fontFamily:'Space Grotesk' }}>Portfolio</h1>
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="flex flex-wrap">
          {categories.map(c => <TabsTrigger key={c.key} value={c.key}>{c.label}</TabsTrigger>)}
        </TabsList>
        <TabsContent value={tab} className="mt-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export function ContactPage(){
  const { toast } = useToast();
  const [form, setForm] = useState(()=>{
    const cached = localStorage.getItem('contactForm');
    return cached? JSON.parse(cached): { name:'', email:'', company:'', budget:'', message:'', consent:false };
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const next = { ...form, [name]: type==='checkbox' ? checked : value };
    setForm(next);
    localStorage.setItem('contactForm', JSON.stringify(next));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // minimal validation
    if (!form.name || !form.email || !form.message || !form.consent) {
      toast({ title:'Please complete required fields', description:'Name, email, message and consent are required.' });
      return;
    }
    setSubmitted(true);
    toast({ title:'Message sent', description:'This is a mocked success state in MVP.' });
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl mb-2" style={{ fontFamily:'Space Grotesk' }}>Let’s work together</h1>
        <p className="text-[color:var(--muted-2)] mb-4">I help teams model agronomic systems, ship reliable ML, and make better decisions with data.</p>
        <ul className="text-sm list-disc ml-5 space-y-1 text-[color:var(--muted-2)]">
          <li>Typical timelines: 2–12 weeks</li>
          <li>Engagements: discovery, modeling, MLOps, dashboards</li>
          <li>Values: clarity, reproducibility, sustainability</li>
        </ul>
      </div>
      <form onSubmit={onSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <Input name="name" placeholder="Name *" value={form.name} onChange={onChange} />
          <Input name="email" type="email" placeholder="Email *" value={form.email} onChange={onChange} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Input name="company" placeholder="Company" value={form.company} onChange={onChange} />
          <Input name="budget" placeholder="Budget (USD)" value={form.budget} onChange={onChange} />
        </div>
        <Textarea name="message" placeholder="Project summary *" value={form.message} onChange={onChange} />
        <label className="text-sm flex items-center gap-2">
          <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} />
          <span>I agree to be contacted (GDPR-friendly)</span>
        </label>
        <div className="flex gap-2">
          <Button type="submit" className="bg-[color:var(--green-800)] hover:bg-[color:var(--green-600)] text-white">Send message</Button>
          {submitted && <span className="text-sm text-[color:var(--green-800)]">Thanks! I’ll reply soon.</span>}
        </div>
      </form>
    </div>
  );
}
