"use client";

import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  SigmaContainer,
  useLoadGraph,
  useSigma,
} from "@react-sigma/core";
import "@react-sigma/core/lib/style.css";
import { MultiDirectedGraph } from "graphology";
import forceAtlas2 from "graphology-layout-forceatlas2";

const sigmaStyle = { height: "100%", width: "100%" };

/* ===============================
   Helper: random posisi di radius
================================ */
function randomAround(
  cx: number,
  cy: number,
  radius = 0.18
) {
  const angle = Math.random() * Math.PI * 2;
  const r = radius * (0.8 + Math.random() * 0.5);
  return {
    x: cx + Math.cos(angle) * r,
    y: cy + Math.sin(angle) * r,
  };
}

/* ===============================
   Load Graph
================================ */
const LoadGraph = ({hardSkillData, softSkillData}) => {
  const loadGraph = useLoadGraph();
  const sigma = useSigma();

  useEffect(() => {
    const graph = new MultiDirectedGraph();

    /* -------- Parent Nodes (FIXED) -------- */
    graph.addNode("A", {
      x: 0,
      y: 0.2,
      label: "T002",
      size: 50,
      fixed: true,
      color: "#0046FF"
    });

    graph.addNode("B", {
      x: 0.5,
      y: -0.1,
      label: "Hard Skill",
      size: 30,
      fixed: true,
      color: "#FFA239"
    });

    graph.addNode("C", {
      x: -0.5,
      y: -0.1,
      label: "Soft Skill",
      size: 30,
      fixed: true,
      color: "#9B5DE0"
    });

    graph.addEdge("A", "B");
    graph.addEdge("A", "C");

    /* -------- Hard Skills -------- */
    hardSkillData.forEach((skill, i) => {
      graph.addNode(`hard-${i}`, {
        label: skill.subjectName,
        size: 15,
        ...randomAround(0.5, -0.1),
        color:"#FEEE91"
      });
      graph.addEdge("B", `hard-${i}`);
    });

    /* -------- Soft Skills -------- */
    softSkillData.forEach((skill, i) => {
      graph.addNode(`soft-${i}`, {
        label: skill.subjectName,
        size: 15,
        ...randomAround(-0.5, -0.1),
        color: "#FFBBE1"
      });
      graph.addEdge("C", `soft-${i}`);
    });

    /* -------- Load to Sigma -------- */
    loadGraph(graph);

    /* -------- ForceAtlas (Fine Tune Only) -------- */
    forceAtlas2.assign(graph, {
      iterations: 80,
      settings: {
        gravity: 0.002,
        scalingRatio: 1.5,
        strongGravityMode: false,
        slowDown: 1,
      },
    });

    /* -------- Camera -------- */
    requestAnimationFrame(() => {

      sigma.getCamera().animate(
        { x:0.55, y:0.5, ratio: 1.2 },
        { duration: 600 }
      );
    });
  }, [loadGraph, sigma]);

  return null;
};

/* ===============================
   Page Component
================================ */
export default function SkillNodeMap({softSkillData, hardSkillData}) {
  const uniqueBySubjectName = Array.from(
    new Map(hardSkillData?.map(item => [item.subjectName, item])).values()
  );
  return (
    <Card className="p-6 border-accent/30 bg-card/80 backdrop-blur h-[50vw] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Skill Development Path</h3>
      </div>

      <div className="relative flex-1 bg-secondary/20 rounded-lg border border-border/50 overflow-hidden">
        <SigmaContainer style={sigmaStyle} >
          {softSkillData && hardSkillData ? <LoadGraph softSkillData={softSkillData} hardSkillData={uniqueBySubjectName} /> : <h2>Loading</h2> }
        </SigmaContainer>
      </div>
    </Card>
  );
}
