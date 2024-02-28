import { NextResponse } from "next/server";
import openai from "@/openai";
import { log } from "console";

export async function POST(request: Request) {
  //weatherdata in the body of the POST req
  const { weatherData } = await request.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `Pretend you're a weather news presenter presenting LIVE on television. Introduce yourself as rainman and say you are LIVE from the Weather App 2.0 HQ.
                State the city you are providing a summary for. The give a summary of todays weather only. Make it easy for the viewer to understand and know what to do to prepare
                for those weather conditions such as wear SPF if the UV is high etc. use the uv_index daya provided to provide UV advice. Provide a joke regarding the weather.
                Assume the data came from your team at the news office and not the user,`,
      },
      {
        role: "user",
        content: `Hi there can I get a summary of the weather. use the following information to get the weater data: ${JSON.stringify(
          weatherData
        )}`,
      },
    ],
  });

  console.log("DATA IS: ", response.choices[0].message);

  return NextResponse.json(response.choices[0].message);
}
