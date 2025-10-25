import React from "react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <Card className="group overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
      <div className="aspect-[16/9] w-full bg-gradient-to-br from-[color:var(--green-200)]/40 to-transparent"/>
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold" style={{ fontFamily:'Space Grotesk' }}>{project.title}</h3>
          <span className="text-sm text-[color:var(--green-800)]">{project.impact}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[color:var(--muted-2)] mb-3">{project.summary}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((t) => (
            <Badge key={t} variant="secondary" className="bg-[color:var(--green-50)] text-[color:var(--green-800)] border border-[color:var(--green-200)]">
              {t}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {project.links.case && (
            <Button variant="outline" className="border" style={{ borderColor:'var(--border)' }} onClick={()=>window.alert('Case study is mocked')}>
              Case Study
            </Button>
          )}
          {project.links.repo && (
            <Button variant="ghost" className="hover:underline" onClick={()=>window.alert('Repo link is mocked')}>
              Repo <ExternalLink className="w-4 h-4 ml-1"/>
            </Button>
          )}
          {project.links.demo && (
            <Button className="bg-[color:var(--green-800)] hover:bg-[color:var(--green-600)] text-white" onClick={()=>window.alert('Demo is mocked')}>
              Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
