import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-5xl font-bold tracking-tight">AI Image Generator</h1>
      <p className="mt-4 text-xl text-muted-foreground">Create stunning images with AI in seconds</p>
      <div className="flex w-full max-w-md gap-4 mt-8">
        <Input
          type="text"
          placeholder="Enter your prompt..."
          className="flex-1"
        />
        <Button size="lg">Generate</Button>
      </div>
    </div>
  );
}