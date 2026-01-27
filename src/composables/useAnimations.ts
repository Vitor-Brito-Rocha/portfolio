// composables/useAnimations.ts
import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
    let animations: gsap.core.Tween[] = []

    onMounted(() => {
        // Animação de fade in para cards
        const fadeInElements = gsap.utils.toArray('.fade-in-element')
        fadeInElements.forEach((element: any) => {
            const anim = gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom-=100',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power2.out'
            })
            animations.push(anim)
        })

        // Animação de slide para skills
        const slideElements = gsap.utils.toArray('.slide-in-element')
        slideElements.forEach((element: any, index: number) => {
            const anim = gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom-=50',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'power3.out'
            })
            animations.push(anim)
        })

        // Animação de scale para projects
        const scaleElements = gsap.utils.toArray('.scale-in-element')
        scaleElements.forEach((element: any, index: number) => {
            const anim = gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom-=100',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                scale: 0.8,
                duration: 0.6,
                delay: index * 0.15,
                ease: 'back.out(1.7)'
            })
            animations.push(anim)
        })
    })

    onBeforeUnmount(() => {
        animations.forEach(anim => anim.kill())
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    })

    return {
        // Animação de hover para cards
        animateCardHover: (element: HTMLElement) => {
            gsap.to(element, {
                y: -10,
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            })
        },

        animateCardLeave: (element: HTMLElement) => {
            gsap.to(element, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            })
        },

        // Animação de texto digitando
        typewriterAnimation: (element: HTMLElement, text: string) => {
            const chars = text.split('')
            element.textContent = ''

            chars.forEach((char, index) => {
                const span = document.createElement('span')
                span.textContent = char
                span.style.opacity = '0'
                element.appendChild(span)

                gsap.to(span, {
                    opacity: 1,
                    duration: 0.05,
                    delay: index * 0.05
                })
            })
        },

        // Animação de contador
        counterAnimation: (element: HTMLElement, target: number) => {
            const obj = { value: 0 }
            gsap.to(obj, {
                value: target,
                duration: 2,
                ease: 'power1.out',
                onUpdate: () => {
                    element.textContent = Math.round(obj.value).toString()
                }
            })
        }
    }
}