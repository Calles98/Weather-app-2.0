"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 to-black p-10 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx-auto bg-white rounded-xl">
        <Text className="text-6xl font-bold text-center mb-10 opacity-50">
          Weather AI
        </Text>
        <Subtitle className="text-xl text-center opacity-35">
          Powed by OpenAI, Next.js 14, Tailwind CSS, Tremor and more!
        </Subtitle>

        <Divider className="my-10 border" />

        <Card className="bg-gradient-to-br from-blue-700 to-black p-10 rounded-xl">
          {/* CityPicker */}
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
