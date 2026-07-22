import NavigationItemEditor from './navigation-item-editor';
import React from 'react';
import {Button, SortableList} from '@tryghost/admin-x-design-system';
import {LucideIcon} from '@tryghost/shade/utils';
import {type NavigationEditor} from '../../../../hooks/site/use-navigation-editor';

const NavigationEditForm: React.FC<{
    baseUrl: string;
    navigation: NavigationEditor;
}> = ({baseUrl, navigation}) => {
    return <div className="w-full pt-2">
        <SortableList
            items={navigation.items}
            itemSeparator={false}
            renderItem={item => (
                <NavigationItemEditor
                    action={<Button className='mt-1 self-start' icon={<LucideIcon.Trash2 />} size='sm' onClick={() => navigation.removeItem(item.id)} />}
                    baseUrl={baseUrl}
                    clearError={key => navigation.clearError(item.id, key)}
                    item={item}
                    updateItem={updates => navigation.updateItem(item.id, updates)}
                />
            )}
            onMove={navigation.moveItem}
        />
        <div className='flex items-start gap-3'>
            <LucideIcon.Plus className='mt-3 size-4 text-muted-foreground' />
            <NavigationItemEditor
                action={<Button className='mx-2 mt-1 self-start rounded bg-green p-1' data-testid="add-button" icon={<LucideIcon.Plus />} iconColorClass='text-white' size='sm' unstyled onClick={navigation.addItem} />}
                addItem={navigation.addItem}
                baseUrl={baseUrl}
                className="mt-1"
                clearError={key => navigation.clearError(navigation.newItem.id, key)}
                data-testid="new-navigation-item"
                item={navigation.newItem}
                labelPlaceholder="New item label"
                updateItem={navigation.setNewItem}
            />
        </div>
    </div>;
};

export default NavigationEditForm;
