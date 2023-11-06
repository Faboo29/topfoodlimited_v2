import clsx from 'clsx';
import React from 'react';
import { Node } from '@/types';

export const renderNode = (node: Node): React.ReactNode => {
  if (node.nodeType === 'text') {
    const mark = node.marks ? node.marks[0] : null;

    return <span className={clsx(mark?.type && mark.type)}>{node.value}</span>;
  }

  if (node.nodeType === 'paragraph') {
    return (
      <p>
        {node.content.map((childNode, index) => (
          <React.Fragment key={index}>{renderNode(childNode)}</React.Fragment>
        ))}
      </p>
    );
  }

  if (node.nodeType === 'document') {
    return (
      <div>
        {node.content.map((childNode, index) => (
          <React.Fragment key={index}>{renderNode(childNode)}</React.Fragment>
        ))}
      </div>
    );
  }

  return null;
};
