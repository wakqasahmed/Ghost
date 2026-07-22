import React from 'react';
import Button from '../button';
import {LucideIcon} from '@tryghost/shade/utils';

const GlobalActions: React.FC = () => {
    return (
        <Button icon={<LucideIcon.Search />} iconColorClass='dark:text-white text-black' size='sm' link onClick={() => {}} />
    );
};

export default GlobalActions;
