"use client";

import type { LucideIcon } from "lucide-react";
import { memo, ReactNode } from "react";
import { WorkflowNode } from "../../../../components/workflow-node";
import {
  BaseNode,
  BaseNodeContent,
} from "../../../../components/react-flow/base-node";
import { BaseHandle } from "../../../../components/react-flow/base-handle";
import { NodeProps, Position, useReactFlow } from "@xyflow/react";
import Image from "next/image";
import {
  NodeStatus,
  NodeStatusIndicator,
} from "@/components/node-status-indicator";

interface Props extends NodeProps {
  icon: LucideIcon | string;
  name: string;
  descripion?: string;
  children?: ReactNode;
  status: NodeStatus;
  openSettings?: () => void;
  onDoubleClick?: () => void;
}

export const BaseExecutionNode = memo(
  ({
    id,
    icon: Icon,
    name,
    children,
    descripion,
    onDoubleClick,
    openSettings,
    status = "initial",
  }: Props) => {
    const { setNodes, setEdges } = useReactFlow();
    const handleDelete = () => {
      setNodes((currentNodes) => {
        const updatedNodes = currentNodes.filter((node) => node.id !== id);
        return updatedNodes;
      });

      setEdges((currentEdges) => {
        const updatedEdges = currentEdges.filter(
          (edge) => edge.source !== id && edge.target !== id
        );
        return updatedEdges;
      });
    };
    return (
      <WorkflowNode
        name={name}
        description={descripion}
        onDelete={handleDelete}
        onSettings={openSettings}
        showToolbar={true}
      >
        <NodeStatusIndicator status={status} variant="border" >
          <BaseNode onDoubleClick={onDoubleClick} status={status}>
            <BaseNodeContent>
              {typeof Icon === "string" ? (
                <Image src={Icon} alt={name} width={16} height={16} />
              ) : (
                <Icon className="size-4 text-muted-foreground" />
              )}
              {children}
              <BaseHandle
                id="target-1"
                type="target"
                position={Position.Left}
              />
              <BaseHandle
                id="source-1"
                type="source"
                position={Position.Right}
              />
            </BaseNodeContent>
          </BaseNode>
        </NodeStatusIndicator>
      </WorkflowNode>
    );
  }
);

BaseExecutionNode.displayName = "BaseExecutionNode";
