import Welcome from "./Welcome";
import Code from "./Code";

export default function ConditionalComponents() {
  const display = false;
  return display ? <Welcome></Welcome> : <Code> </Code>;
}
