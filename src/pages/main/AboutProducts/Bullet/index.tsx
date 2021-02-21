
import React from "react";

export interface BulletProps {
  title: string;
  description: string;
}

function Bullet(props: BulletProps) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Bullet;
