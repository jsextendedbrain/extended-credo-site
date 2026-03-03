import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Json } from "@/integrations/supabase/types";

export function useCmsSection<T>(sectionKey: string, fallback: T) {
  return useQuery({
    queryKey: ["cms", sectionKey],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("cms_sections")
        .select("content")
        .eq("section_key", sectionKey)
        .single();
      if (error) throw error;
      return data.content as unknown as T;
    },
    placeholderData: fallback as any,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCmsUpdate(sectionKey: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (content: unknown) => {
      const { error } = await supabase
        .from("cms_sections")
        .update({ content: content as Json, updated_at: new Date().toISOString() })
        .eq("section_key", sectionKey);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cms", sectionKey] });
    },
  });
}
