import { useState } from 'react';
import { Drawer, useMantineTheme, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { navLinks } from './Header';

const SideBar = () => {
  const [opened, { toggle }] = useDisclosure();  const theme = useMantineTheme();

  return (
    <>


      <Drawer.Root opened={opened} onClose={toggle} className='md:!hidden !-z-0' position='right' size={'50vw'}>
        <Drawer.Overlay className="!-z-0" style={{ backgroundOpacity: 0.5, blur: 4 }} />
        <Drawer.Content className="!-z-0" bg={"#0a192f"}>
          <Drawer.Body className='flex flex-col  mt-20 gap-5' bg={"#0a192f"}>{navLinks(true,toggle)}</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      {/* <Button  onClick={() => setOpened(true)}>Open Drawer</Button> */}
      <Burger className='md:!hidden !z-10' color='#64FFDA' size="lg" opened={opened} onClick={toggle} aria-label="Toggle navigation" />

    </>
  );
}

export default SideBar;