import { mount } from "@vue/test-utils";
import { describe, expect, it } from 'vitest';
import component from '../atoms/TheButton.vue';

describe('TheButton.vue', () => {
    describe('when mounted', () => {
        it('renders properly', () => {
            const wrapper = mount(component, {});
            expect(wrapper.html()).toContain('button');
        });
        it('default to light theme', () => {
            const wrapper = mount(component, {});
            expect(wrapper.classes()).toContain('light');
        });

        it("renders dark theme when theme prop is dark", () => {
            const wrapper = mount(component, {
                props: {
                    value: "Test Button",
                    theme: "dark"
                }
            });

            expect(wrapper.classes()).toContain("dark");
        })
    });
});
