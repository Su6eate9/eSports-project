interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return <button>{title}</button>;
}

export function App() {
  return (
    <div>
      <Button title="Clique aqui" />
    </div>
  );
}
