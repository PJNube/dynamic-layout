import ReactFlow, {
  Controls,
  Background,
  ReactFlowProvider,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
} from "reactflow";
import "reactflow/dist/style.css";
import { useCallback, useEffect } from "react";

const initNodes = [
  {
    id: "101",
    position: { x: 160, y: 200 },
    data: { label: "Node 101" },
  },
  {
    id: "102",
    position: { x: 80, y: 350 },
    data: { label: "Node 102" },
  },
  {
    id: "103",
    position: { x: 400, y: 400 },
    data: { label: "Node 103" },
  },
  {
    id: "104",
    position: { x: 220, y: 550 },
    data: { label: "Node 104" },
  },
];

const initEdges = [
  { id: "e1-2", source: "101", target: "102" },
  { id: "e1-3", source: "101", target: "103" },
];

export default function FlowPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    setNodes(initNodes);
    setEdges(initEdges);
  }, []);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params }, eds)),
    []
  );
  return (
    <div style={{ width: "100%", height: "calc(100vh - 70px)" }}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          snapToGrid
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}
