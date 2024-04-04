import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
    return (
        <div className="space-y-14">

            <h1 style={{backgroundColor: 'rgba(19, 19, 19, 0.05)'}} className="text-3xl font-bold text-center h-[30vh] flex justify-center items-center">Books</h1>

            <div className="text-center">
            <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A]">Filter</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-left space-y-2 font-bold">
    <li>Rating</li>
    <li>Year</li>
    <li>Number of Pages</li>
  </ul>
</div>
            </div>

            <div>

            <Tabs>
      <TabList>
        <Tab>Mario</Tab>
        <Tab>Peach</Tab>
      </TabList>
  
      <TabPanel>
        <p>
          <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>) (<i>English:
          /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a fictional character in the Mario video
          game franchise, owned by Nintendo and created by Japanese video game designer
          Shigeru Miyamoto. Serving as the companys mascot and the eponymous protagonist
          of the series, Mario has appeared in over 200 video games since his creation.
          Depicted as a short, pudgy, Italian plumber who resides in the Mushroom
          Kingdom, his adventures generally center upon rescuing Princess Peach from the
          Koopa villain Bowser. His younger brother and sidekick is Luigi.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          <b>Peach</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
          Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
          released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
          as the slightly younger but taller fraternal twin brother of Nintendos mascot Mario, and
          appears in many games throughout the Mario franchise, often as a sidekick to his brother.
        </p>
      </TabPanel>
    </Tabs>
                
            </div>
            
        </div>
    );
};

export default ListedBooks;