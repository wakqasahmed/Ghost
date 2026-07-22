import React from 'react';
import Button from '../button';
import {LucideIcon} from '@tryghost/shade/utils';

const PageMenu: React.FC = () => {
    return (
        <Button icon={<LucideIcon.Menu />} iconColorClass='text-black dark:text-white' size='sm' link onClick={() => {
            alert('Clicked on hamburger');
        }} />
    );
};

export default PageMenu;
