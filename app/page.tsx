"use client";
import AddPerson from "@/components/controls/AddPerson";
import Board from "@/components/controls/Board";
import AddItems from "@/components/controls/AddItems";
import NavBar from "@/components/NavBar";
import { useGlobals } from "@/contexts/GlobalContext";
import AddImage from "@/components/controls/AddImage";
import BoardUtilities from "@/components/controls/BoardUtilities";
import EditPersons from "@/components/controls/EditPersons";
import Celebrities from "@/components/controls/Celebrities";
import { ItemType } from "@/misc/enums";
import AddPokemon from "@/components/controls/AddPokemon";
import { BsImage } from "react-icons/bs";
import { cn } from "@/misc/utils";
import AdsenseUnit from "@/components/google-ads/AdsenseUnit";
import { useEffect } from "react";

export default function Home() {
  const { selectedScreen, setSelectedScreen } = useGlobals();

  useEffect(() => {
    document.title =
      "Height Comparison Chart - Compare Multiple Heights Visually";
  }, []);

  // Define the screens inside the component
  const screens = {
    "Add Person": <AddPerson key="add-person" />,
    "Edit Persons": <EditPersons key="edit-persons" />,
    Celebrities: <Celebrities key="celebrities" category="Celebrities" />,
    Fictional: <Celebrities key="fictional" category="Fictional" />,
    Objects: <AddItems type={ItemType.OBJECT} key="add-items-object" />,
    Buildings: <AddItems type={ItemType.BUILDING} key="add-items-building" />,
    Animals: <AddItems type={ItemType.ANIMAL} key="add-items-animal" />,
    Pokemon: <AddPokemon key="add-items-pokemon" />,
    "Add Image": <AddImage key="add-image" />,
  };

  return (
    <main className="p-2.5 space-y-2.5 flex flex-col items-stretch">
      <NavBar className="hidden lg:flex z-[9999]" />
      <div className="md:hidden">
        <AdsenseUnit slot="1419638897" format="auto" responsive={true} />
      </div>

      <div className="flex flex-col lg:flex-row gap-2.5  h-fit lg:min-h-screen relative z-10">
        <div className="w-full h-full lg:max-w-[400px] bg-white rounded-2xl shadow-sm p-4 border border-gray-200 overflow-y-auto">
          {screens[selectedScreen as keyof typeof screens]}
        </div>
        <div className="flex flex-col flex-grow gap-2 order-first lg:order-none">
          <BoardUtilities />
          <Board />
          <span
            onClick={() => setSelectedScreen("Add Image")}
            className={`flex md:hidden w-full justify-center items-center gap-2 max-h-[50px] py-4 px-6 h-full !mt-0 border-b border-transparent bg-white rounded-2xl shadow-sm border border-gray-200 transition-all duration-300 cursor-pointer hover:text-primary hover:border-primary/40 ${cn(
              selectedScreen === "Image" && "!text-primary !border-primary"
            )}`}
          >
            <BsImage />
            <span className="text-xs text-center"> Add Image</span>
          </span>
          <NavBar className="lg:hidden" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2.5">
        <div className="w-full md:min-w-[400px] md:max-w-[400px]">
          <AdsenseUnit slot="7985047243" format="auto" responsive={true} />
        </div>
        <Content />
      </div>
    </main>
  );
}

const Content = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-8 [&_p]:text-sm [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-800 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-gray-800 [&_h3]:mt-4 [&_h2]:mt-4 [&_p]:mt-2 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2  [&_ul]:text-sm [&_ul]:mt-2 [&_li]:text-sm [&_li]:mt-2 [&_li]:mb-2">
      <p>
        Heightcomparisonchart.com has a straightforward tool for quickly
        measuring your height compared to your partner, children, and pet. You
        can visualize the exact dimensions of your body here without going
        through hundreds of applications or wasting your time online searching
        for the best height comparison website.
      </p>
      <h2>How to Use Height Comparison Chart</h2>
      <p>
        The tool has been created with all types of users in mind, so you and
        anyone like you can use it regardless of gender discrimination. The
        comparing height tool has a unique measurement function that can display
        results in both cm (centimeters) and feet (inches) so that you can
        choose any of them. This visual chart helps you find the true height
        difference between men and women. You can measure up to 10,000 meters,
        which is about 32,808.4 feet. It means you can measure any height, even
        Mount Everest, the Statue of Liberty, Burj Khalifa , Burj Al Arab ,
        London eye , the Eiffel Tower and many more.
      </p>
      <ul>
        <li>
          First, You have to decide with whom you want to compare your height.
          It will be an object, building, animal, fictional character, or
          male/female. If you want to compare two people&apos;s height, then
          specify the gender, weight, and height of the first person in inches
          or centimeters. The same goes for other persons, kids, and pets. Now
          it&apos;s time to press the &quot; Add &quot; Button.
        </li>

        <li>
          To compare persons with other elements like objects, you only need to
          put the height and gender of the person. The height of all objects and
          other elements is already specified in our database, so there is no
          need to put their height.
        </li>
        <li>
          In the meantime, everything that you wished and submitted to compare
          is now clearly visible on the chart with the most accurate difference
          in measurements. Also, the tool automatically converts measurements in
          centimeters to feet and vice versa as needed.
        </li>
      </ul>
      <h2>Why Compare Your Height On This Chart </h2>
      <p>
        Normal visualizers show the average difference in Height for men, women,
        and children. But here, you will find real height comparisons in a
        visual chart with a human Avatar. It is easy to get accurate results, so
        you can use it to find out what difference your friends or celebrities’
        height is and use it as a discussion point for the next time you make
        small talk with someone taller/shorter than you.
      </p>
      <h3>Check Your Kid&apos;s Growth</h3>
      <p>
        As you know, the use of height comparison charts is common in schools,
        offices, and homes. It measures your child&apos;s height. Now you can
        determine online who the biggest and tallest kid in town is, according
        to the same age! So check instantly to acknowledge your kid&apos;s
        growth over time.
      </p>
      <h3>Other Benefits</h3>
      <p>
        In the celebrity section, we have maintained a big database of the
        heights of celebrities like BTS, the tallest USA presidents, Actors,
        Boxers, MMA stars, UFC fighters, Tennis Players, and many others. So you
        can compare yourself with your favourite celebrity to see the difference
        in your height with them. You can also compare the height of many
        fictional and animated characters like Batman, Pokémon, Naruto,
        Spider-Man, Dragon Ball Z and animals like dinosaurs, giraffes, bears,
        Elephants, Moose and many more.
      </p>
      <h2>Compare Multiple Heights</h2>
      <p>
        Do you want to know how your groomsmen or bridesmaids will look with
        you? At heightcomparisonchart.com, compare the heights of multiple boys
        and girls at the same time to see the difference in your height with
        them! Based on the real height visualization of men and women, The chart
        gives you the ability to calculate how tall your spouse and someone else
        is. So, you can make the right choice of the person you are going to
        stand with for years. By presenting the data side-by-side, it&apos;s
        easy to see how tall or small you look with them. You can print it out,
        place it in your room, or display it proudly on your wall.
      </p>
      <h2>How Much Accurate Is It?</h2>
      <p>
        Could you do an accurate comparison with the help of this chart? The
        answer is Yes! The tool is a simulator that compares the height on the
        chart and shows the reader accurate information about the heights of
        multiple people. It compares your height with other people&apos;s
        heights in a highly straightforward manner on a well-designed interface.
        It displays an exact visual measurement of the 5&apos;2 and 5&apos;7
        difference in the way they look real.
      </p>
      <h2>Our Mission</h2>
      <p>
        We are not just giving you accurate height measurements, but we also
        want to help you get the best possible experience. We have a unique
        mapping feature that helps you to see your accurate comparison in feet
        and inches. We will help you measure your height and compare it to the
        real height of someone with a different gender and body type. You can
        visualize your height compared to anybody in this world.
      </p>
    </div>
  );
};
